'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Expenses", [
      {
        header: "RENT",
        totalAmount: 600,
        paidStatus: false,
        members: [1],
        createdBy: 7,
        requirements: null,
        categoryId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        header: "dinner",
        totalAmount: 31.23,
        paidStatus: false,
        members: [5,4],
        createdBy: 1,
        requirements: null,
        categoryId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        header: "pizza <3",
        totalAmount: 34,
        paidStatus: true,
        members: [1,2,10],
        createdBy: 5,
        requirements: null,
        categoryId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        header: "groceries",
        totalAmount: 60.02,
        paidStatus: false,
        members: [2],
        createdBy: 1,
        requirements: null,
        categoryId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        header: "drinksss",
        totalAmount: 34,
        paidStatus: false,
        members: [1,7,9],
        createdBy: 2,
        requirements: null,
        categoryId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        header: "ride",
        totalAmount: 10,
        paidStatus: true,
        members: [2,3],
        createdBy: 1,
        requirements: null,
        categoryId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        header: "movies",
        totalAmount: 22,
        paidStatus: false,
        members: [7,8],
        createdBy: 1,
        requirements: null,
        categoryId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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
