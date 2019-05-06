'use strict';
module.exports = (sequelize, DataTypes) => {
  const Nutrient = sequelize.define('Nutrient', {
    nutrient_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    unit: DataTypes.STRING
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  Nutrient.associate = function(models) {
    Nutrient.hasMany(models.FoodNutrition, {
      foreignKey: 'nutrientId',
      as: 'foodNutrients'
    })
  };
  return Nutrient;
};
