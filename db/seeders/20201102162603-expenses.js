'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Expenses", [
      {
        header: "RENT",
        totalAmount: 600.00,
        paidStatus: false,
        members: [1],
        createdBy: 7,
        requirements: null,
        categoryId: null,
        createdAt: new Date(2020, 10, 1),
        updatedAt: new Date(2020, 10, 1),
      },
      {
        header: "dinner",
        totalAmount: 31.23,
        paidStatus: false,
        members: [5,4],
        createdBy: 1,
        requirements: null,
        categoryId: null,
        createdAt: new Date(2020, 10, 3),
        updatedAt: new Date(2020, 10, 3),
      },
      {
        header: "pizza <3",
        totalAmount: 34.00,
        paidStatus: true,
        members: [1,2,10],
        createdBy: 5,
        requirements: null,
        categoryId: null,
        createdAt: new Date(2020, 10, 4),
        updatedAt: new Date(2020, 10, 4),
      },
      {
        header: "groceries",
        totalAmount: 79.02,
        paidStatus: false,
        members: [2, 1],
        createdBy: 4,
        requirements: null,
        categoryId: null,
        createdAt: new Date(2020, 10, 10),
        updatedAt: new Date(2020, 10, 10),
      },
      {
        header: "Halloween",
        totalAmount: 34.00,
        paidStatus: false,
        members: [1,7,9],
        createdBy: 2,
        requirements: null,
        categoryId: null,
        createdAt: new Date(2020, 9, 31),
        updatedAt: new Date(2020, 9, 31),
      },
      {
        header: "ride",
        totalAmount: 10.00,
        paidStatus: true,
        members: [2,3],
        createdBy: 1,
        requirements: null,
        categoryId: null,
        createdAt: new Date(2020, 9, 18),
        updatedAt: new Date(2020, 9, 18),
      },
      {
        header: "movies",
        totalAmount: 22.00,
        paidStatus: false,
        members: [7,8],
        createdBy: 1,
        requirements: null,
        categoryId: null,
        createdAt: new Date(2020, 9, 4),
        updatedAt: new Date(2020, 9, 4),
      },
      {
        header: "Coffee :D",
        totalAmount: 4.69,
        paidStatus: false,
        members: [1],
        createdBy: 10,
        requirements: null,
        categoryId: null,
        createdAt: new Date(2020, 8, 27),
        updatedAt: new Date(2020, 8, 27),
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
