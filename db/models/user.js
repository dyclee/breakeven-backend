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
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Expense, { foreignKey: 'createdBy' });
    User.hasMany(models.UserExpense, { foreignKey: 'userId' });

    User.belongsToMany(models.User, {
      as: "friends",
      through: "Friend",
      otherKey: "friender",
      foreignKey: "friended",
    });
  };
  return User;
};
