'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    userId_1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId_2: {
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
