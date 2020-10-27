'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserExpense = sequelize.define('UserExpense', {
    userId: DataTypes.INTEGER,
    expenseId: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    paidStatus: DataTypes.BOOLEAN
  }, {});
  UserExpense.associate = function(models) {
    // associations can be defined here
  };
  return UserExpense;
};