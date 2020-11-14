'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("UserExpenses", [
      {
        userId: 1,
        expenseId: 1,
        amount: 600,
        paidStatus: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        expenseId: 2,
        amount: 15.62,
        paidStatus: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        expenseId: 2,
        amount: 15.62,
        paidStatus: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        expenseId: 3,
        amount: 11.33,
        paidStatus: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        expenseId: 3,
        amount: 11.33,
        paidStatus: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 10,
        expenseId: 3,
        amount: 11.33,
        paidStatus: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        expenseId: 4,
        amount: 39.51,
        paidStatus: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        expenseId: 4,
        amount: 39.51,
        paidStatus: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        expenseId: 5,
        amount: 11.33,
        paidStatus: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        expenseId: 5,
        amount: 11.33,
        paidStatus: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 9,
        expenseId: 5,
        amount: 11.33,
        paidStatus: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        expenseId: 6,
        amount: 5.00,
        paidStatus: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        expenseId: 6,
        amount: 5.00,
        paidStatus: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        expenseId: 7,
        amount: 11.00,
        paidStatus: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 8,
        expenseId: 7,
        amount: 11.00,
        paidStatus: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        expenseId: 8,
        amount: 4.69,
        paidStatus: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
