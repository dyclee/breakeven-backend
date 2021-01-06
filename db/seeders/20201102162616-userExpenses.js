'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("UserExpenses", [
      {
        userId: 1,
        expenseId: 1,
        amount: 600,
        paidStatus: false,
        reminder: true,
        createdAt: new Date(2020, 10, 1),
        updatedAt: new Date(2020, 10, 1),
      },
      {
        userId: 5,
        expenseId: 2,
        amount: 15.62,
        paidStatus: false,
        reminder: false,
        createdAt: new Date(2020, 10, 3),
        updatedAt: new Date(2020, 10, 3),
      },
      {
        userId: 4,
        expenseId: 2,
        amount: 15.62,
        paidStatus: false,
        reminder: false,
        createdAt: new Date(2020, 10, 3),
        updatedAt: new Date(2020, 10, 3),
      },
      {
        userId: 1,
        expenseId: 3,
        amount: 11.33,
        paidStatus: true,
        reminder: true,
        createdAt: new Date(2020, 10, 4),
        updatedAt: new Date(2020, 10, 4),
      },
      {
        userId: 2,
        expenseId: 3,
        amount: 11.33,
        paidStatus: true,
        reminder: false,
        createdAt: new Date(2020, 10, 4),
        updatedAt: new Date(2020, 10, 4),
      },
      {
        userId: 10,
        expenseId: 3,
        amount: 11.33,
        paidStatus: true,
        reminder: false,
        createdAt: new Date(2020, 10, 4),
        updatedAt: new Date(2020, 10, 4),
      },
      {
        userId: 2,
        expenseId: 4,
        amount: 39.51,
        paidStatus: false,
        reminder: false,
        createdAt: new Date(2020, 10, 10),
        updatedAt: new Date(2020, 10, 10),
      },
      {
        userId: 1,
        expenseId: 4,
        amount: 39.51,
        paidStatus: false,
        reminder: true,
        createdAt: new Date(2020, 10, 10),
        updatedAt: new Date(2020, 10, 10),
      },
      {
        userId: 1,
        expenseId: 5,
        amount: 11.33,
        paidStatus: false,
        reminder: true,
        createdAt: new Date(2020, 9, 31),
        updatedAt: new Date(2020, 9, 31),
      },
      {
        userId: 7,
        expenseId: 5,
        amount: 11.33,
        paidStatus: false,
        reminder: false,
        createdAt: new Date(2020, 9, 31),
        updatedAt: new Date(2020, 9, 31),
      },
      {
        userId: 9,
        expenseId: 5,
        amount: 11.33,
        paidStatus: false,
        reminder: false,
        createdAt: new Date(2020, 9, 31),
        updatedAt: new Date(2020, 9, 31),
      },
      {
        userId: 2,
        expenseId: 6,
        amount: 5.00,
        paidStatus: true,
        reminder: false,
        createdAt: new Date(2020, 9, 18),
        updatedAt: new Date(2020, 9, 18),
      },
      {
        userId: 3,
        expenseId: 6,
        amount: 5.00,
        paidStatus: true,
        reminder: false,
        createdAt: new Date(2020, 9, 18),
        updatedAt: new Date(2020, 9, 18),
      },
      {
        userId: 7,
        expenseId: 7,
        amount: 11.00,
        paidStatus: false,
        reminder: false,
        createdAt: new Date(2020, 9, 4),
        updatedAt: new Date(2020, 9, 4),
      },
      {
        userId: 8,
        expenseId: 7,
        amount: 11.00,
        paidStatus: false,
        reminder: false,
        createdAt: new Date(2020, 9, 4),
        updatedAt: new Date(2020, 9, 4),
      },
      {
        userId: 1,
        expenseId: 8,
        amount: 4.69,
        paidStatus: false,
        reminder: true,
        createdAt: new Date(2020, 8, 27),
        updatedAt: new Date(2020, 8, 27),
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserExpenses', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
