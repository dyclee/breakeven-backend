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
    const { members, totalAmount, user, header } = req.body;
    const newTotalExpense = await Expense.create({
        header,
        totalAmount,
        paidStatus: false,
        createdBy: user.id,
    });
    if (!members.evenSplit) {
        // create individual userExpenses by each member
    }

    const amountSplit = totalAmount / members.length;
}))

module.exports = router;
