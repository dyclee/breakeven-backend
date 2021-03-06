const express = require('express');
const {asyncHandler, formatDate } = require('../../utils');
const { checkUser } = require('../../config/auth');

const { Op, sequelize } = require("sequelize");
const { Expense, User, UserExpense } = require('../../db/models')

const router = express.Router();

router.put('/', asyncHandler ( async (req, res, next) => {
    const { userId } = req.body;

    const owedExpenses = await UserExpense.findAll({
        where: {
            userId: {
                [Op.eq]: userId
            }
        },
        include: [
            {model: Expense,
                include: [User]
            }
        ]
    });

    const createdExpenses = await Expense.findAll({
        where: {
            createdBy: {
                [Op.eq]: userId
            }
        },
    });
    const createdUserExpenses = []
    for (let i = 0; i < createdExpenses.length; i++) {
        let expense = createdExpenses[i];
        let userExpenses = await UserExpense.findAll({
            where: {
                expenseId: {
                    [Op.eq]: expense.id
                }
            },
            include: [
                {model: Expense,
                    include: [User]
                },
                {model: User}
            ]
        });
        // console.log("USER EXPENSES", userExpenses)
        Array.prototype.push.apply(createdUserExpenses, userExpenses)
    }

    // console.log("CREATED USER EXPENSES", createdUserExpenses)
    res.status(201).json({ owedExpenses, createdExpenses, createdUserExpenses })
}))

router.post('/', asyncHandler (async (req, res, next) => {
    const { members, totalAmount, userId, header, categoryId, requirements } = req.body;
    const newTotalExpense = await Expense.create({
        header,
        totalAmount,
        paidStatus: false,
        createdBy: userId,
        members,
        categoryId,
        requirements,
    });

    if (members.length === 1) {
        const userExpense = await UserExpense.create({
            userId: members[0],
            expenseId: newTotalExpense.id,
            paidStatus: false,
            amount: totalAmount,
        });
        res.status(201).json({ userExpense });
    } else if (!requirements) {
        const splitEvenly = Math.round(totalAmount * 100.0 / members.length) / 100

        let newExpenses = [];
        for (let i = 0; i < members.length; i++) {
            let userId = members[i];
            const createExpense = await UserExpense.create({
                userId,
                expenseId: newTotalExpense.id,
                paidStatus: false,
                amount: splitEvenly,
            });
            newExpenses.push(createExpense);

        }
        res.status(201).json({newExpenses});

    } else {
        const parsedRequirements = JSON.parse(requirements);
        // console.log("REQUIREMENTS PARSED", parsedRequirements)
        let remainingMembers = members;
        let remainingTotal = totalAmount;
        let requiredExpenses = [];
        let remainingExpenses = [];
        try {
            for (let userId in parsedRequirements) {
                let memberIndex = remainingMembers.indexOf(Number(userId));
                remainingMembers.splice(memberIndex, 1);

                remainingTotal -= parsedRequirements[userId];

                const createRequiredExpense = await UserExpense.create({
                    userId: Number(userId),
                    expenseId: newTotalExpense.id,
                    paidStatus: false,
                    amount: parsedRequirements[userId],
                });
                requiredExpenses.push(createRequiredExpense);
            }

            const remainingSplit = Math.round(remainingTotal * 100.0 / remainingMembers.length) / 100

            for (let i = 0; i < remainingMembers.length; i++) {
                let userId = Number(remainingMembers[i]);
                const createRemainingExpense = await UserExpense.create({
                    userId,
                    expenseId: newTotalExpense.id,
                    paidStatus: false,
                    amount: remainingSplit,
                });
                remainingExpenses.push(createRemainingExpense);
            }

            res.status(201).json({
                requiredExpenses, remainingExpenses
            })
        } catch (e) {
            console.log(e);
        }
    }

}));

router.post('/remind', asyncHandler( async (req, res) => {
    const { userId, expenseId } = req.body;
    try {
        const remindExpense = await UserExpense.findOne({
            where: {
                userId,
                expenseId
            }
        });
        remindExpense.reminder = true;
        await remindExpense.save();

        res.status(201).json({remindExpense})
    } catch (e) {
        const err = new Error("Unable to complete reminder")
        err.status = 401;
        err.message = "Unable to complete reminder"
        res.json({err})
    }
}));

router.post('/deleteRemind', asyncHandler( async (req, res) => {
    const { userId, expenseId } = req.body;
    try {
        const removeReminder = await UserExpense.findOne({
            where: {
                userId,
                expenseId
            }
        });
        removeReminder.reminder = false;
        await removeReminder.save();
        res.status(201).json({removeReminder})
    } catch (e) {
        const err = new Error("Unable to delete reminder")
        err.status = 401;
        err.message = "Unable to delete reminder"
        res.json({err})
    }
}))

router.post('/notifications', asyncHandler( async (req, res) => {
    const { userId } = req.body;
    const notifications = await UserExpense.findAll({
        where: {
            userId,
            paidStatus: {
                [Op.eq]: false
            },
            reminder: {
                [Op.eq]: true
            }
        },
        include: [
            {model: Expense,
                include: [User]
            },
        ]
    });
    res.status(201).json({notifications});
}))

router.post('/pay', asyncHandler( async (req, res) => {
    const { payUser, expenseId, userId } = req.body;
    const payUserExpense = await UserExpense.findOne({
        where: {
            userId,
            expenseId,
            paidStatus: {
                [Op.eq]: false
            }
        }
    });

    const user = await User.findByPk(userId);
    // console.log("USER", user);

    if (payUserExpense.amount > user.balance) {
        // console.log("HITTING THIS?")
        let message = "Not enough funds in balance"
        res.status(401).json({message})
        return;
    }
    payUserExpense.paidStatus = true;

    await payUserExpense.save();

    const paidUser = await User.findByPk(payUser);
    paidUser.balance += payUserExpense.amount;
    await paidUser.save();

    const payer = await User.findByPk(userId);
    payer.balance -= payUserExpense.amount;
    await payer.save();

    const checkRelatedExpenses = await UserExpense.findAll({
        where: {
            expenseId
        }
    });

    const checkTotalCompletion = checkRelatedExpenses.map((expense) => expense.paidStatus);
    try {
        if (checkTotalCompletion.includes(false)) {
            res.status(201).json({payer});
            return
        }

        const completeExpense = await Expense.findByPk(expenseId)
        completeExpense.paidStatus = true;

        await completeExpense.save();
        res.status(201).json({payer});

    } catch (e) {
        const err = new Error("Unable to complete payment")
        err.status = 401;
        err.message = "Unable to complete payment"
        res.json({err})
    }
}))

module.exports = router;
