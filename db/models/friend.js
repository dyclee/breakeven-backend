'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    friendOne: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    friendTwo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pending: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {});
  Friend.associate = function(models) {
    // associations can be defined here
  };
  return Friend;
};
