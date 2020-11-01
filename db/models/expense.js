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
    members: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    requirements: {
      type: DataTypes.JSON,
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Expense.associate = function(models) {
    // associations can be defined here
    Expense.belongsTo(models.Category, { foreignKey: 'categoryId'});
    Expense.belongsTo(models.User, { foreignKey: 'createdBy'})

    const columnMapping = {
      through: 'UserExpense',
      otherKey: 'userId',
      foreignKey: 'expenseId',
    };
    Expense.belongsToMany(models.User, columnMapping);
  };
  return Expense;
};
