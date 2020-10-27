'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    type: DataTypes.STRING(100),
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};
