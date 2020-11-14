'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Friends", [
      {
        friender: 1,
        friended: 3,
        pending: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        friender: 10,
        friended: 1,
        pending: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        friender: 6,
        friended: 1,
        pending: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        friender: 1,
        friended: 2,
        pending: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        friender: 1,
        friended: 4,
        pending: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        friender: 5,
        friended: 1,
        pending: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        friender: 7,
        friended: 1,
        pending: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        friender: 1,
        friended: 8,
        pending: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        friender: 9,
        friended: 1,
        pending: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        friender: 2,
        friended: 3,
        pending: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        friender: 11,
        friended: 1,
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        friender: 12,
        friended: 1,
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        friender: 13,
        friended: 1,
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        friender: 14,
        friended: 1,
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        friender: 15,
        friended: 1,
        pending: true,
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
