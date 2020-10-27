'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.Expense, { foreignKey: 'categoryId'} )
  };
  return Category;
};
