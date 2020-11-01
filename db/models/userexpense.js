'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserExpense = sequelize.define('UserExpense', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expenseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT(8,2),
        allowNull: false,
      },
    paidStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {});
  UserExpense.associate = function(models) {
    // associations can be defined here
    // UserExpense.belongsTo(models.Expense, { foreignKey: 'expenseId' });
    // UserExpense.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return UserExpense;
};
