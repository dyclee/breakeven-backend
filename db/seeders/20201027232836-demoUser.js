'use strict';

const { loginValidator } = require("../../validations");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        fullName: "Rita Smith",
        email: 'rita@email.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Frank Richards",
        email: 'frank@email.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Kevin Durand",
        email: 'kevin@email.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Damien Juliard",
        email: 'damien@email.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Jeremy Win",
        email: 'jeremy@login.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Wardell Curry",
        email: 'wardell@login.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Bruce Burner",
        email: 'bruce@login.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Jennifer Hewitt",
        email: 'jennifer@email.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Hannah Werner",
        email: 'hannah@login.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
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
