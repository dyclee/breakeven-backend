'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Expenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      header: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      totalAmount: {
        type: Sequelize.FLOAT(8,2),
        allowNull: false,
      },
      paidStatus: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      members: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: { model: 'Categories'},
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users'},
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Expenses');
  }
};
