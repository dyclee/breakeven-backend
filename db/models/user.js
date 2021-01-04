'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },
    balance: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false,
      defaultValue: 0,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    tokenId: {
      type: DataTypes.STRING,
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    // User.hasMany(models.Expense, { foreignKey: 'createdBy' });
    // User.hasMany(models.UserExpense, { foreignKey: 'userId' });
    const columnMapping = {
      through: 'UserExpense',
      otherKey: 'expenseId',
      foreignKey: 'userId',
    };
    User.belongsToMany(models.Expense, columnMapping);

    User.belongsToMany(models.User, {
      as: "friendee",
      through: "Friend",
      otherKey: "friender",
      foreignKey: "friended",
    });
    User.belongsToMany(models.User, {
      as: "friend",
      through: "Friend",
      otherKey: "friended",
      foreignKey: "friender",
    });
  };
  return User;
};
