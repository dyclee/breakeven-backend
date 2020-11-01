const express = require('express');
const {asyncHandler} = require('../../utils');
const { checkUser } = require('../../config/auth');

const { Op, sequelize } = require("sequelize");
const { Expense, UserExpense } = require('../../db/models')

const router = express.Router();

router.put('/', asyncHandler ( async (req, res, next) => {
    const { userId } = req.body;

    const allExpenses = await UserExpense.findAll({
        where: {
            userId: {
                [Op.eq]: userId
            }
        },
        include: Expense
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

}))

module.exports = router;
