'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define('Expense', {
    header: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false,
    },
    paidStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    category: {
      type: DataTypes.STRING(100),
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Expense.associate = function(models) {
    // associations can be defined here
  };
  return Expense;
};
