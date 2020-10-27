'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    userId_1: DataTypes.INTEGER,
    userId_2: DataTypes.INTEGER,
    pending: DataTypes.BOOLEAN
  }, {});
  Friend.associate = function(models) {
    // associations can be defined here
  };
  return Friend;
};