const express = require('express');
const {asyncHandler} = require('../../utils');
const { checkUser } = require('../../config/auth');

const { Expense, UserExpense } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler ( async (req, res, next) => {
    const { user } = await checkUser(req);

    const allExpenses = await UserExpense.findAll({
        where: {
            userId: user.id
        },
        include: [Expense]
    });
    console.log(allExpenses);
    res.status(201).json({ allExpenses })
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
    // console.log(newTotalExpense);
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
        // console.log("SPLIT EVENLY:  ", splitEvenly)
        const createUserExpenses = async () => {
            return Promise.all(members.forEach(async(member) => {
                return await UserExpense.create({
                    userId: member,
                    expenseId: newTotalExpense.id,
                    paidStatus: false,
                    amount: splitEvenly
                })
            }));
        };
        createUserExpenses()
            .then(userExpenses => {
                res.status(201).json({
                    userExpenses
                })
            });
    } else {
        const parsedRequirements = JSON.parse(requirements);
        let remainingMembers = members;
        let remainingTotal = totalAmount;
        try {
            const createRequiredExpenses = async () => {
                return Promise.all(parsedRequirements.forEach(async(requirement) => {
                    let memberIndex = remainingMembers.indexOf(requirement[0]);
                    remainingMembers.splice(memberIndex, 1);

                    remainingTotal -= requirement[1];

                    return await UserExpense.create({
                        userId: requirement[0],
                        expenseId: newTotalExpense.id,
                        paidStatus: false,
                        amount: requirement[1],
                    });
                }));
            };
            let requiredExpenses = await createRequiredExpenses();

            const remainingSplit = Math.round(remainingTotal * 100.0 / remainingMembers.length) / 100

            const createRemainingExpenses = async () => {
                return Promise.all(remainingMembers.forEach(async(member) => {
                    return await UserExpense.create({
                        userId: member,
                        expenseId: newTotalExpense.id,
                        paidStatus: false,
                        amount: remainingSplit,
                    });
                }));
            };
            let remainingExpenses = await createRemainingExpenses();

            res.status(201).json({
                requiredExpenses, remainingExpenses
            })
        } catch (e) {
            console.log(e);
        }
    }


    // create individual userExpenses by each member
    const amountSplit = totalAmount / members.length;

}))

module.exports = router;
