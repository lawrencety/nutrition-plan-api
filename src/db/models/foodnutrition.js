'use strict';
module.exports = (sequelize, DataTypes) => {
  const FoodNutrition = sequelize.define('FoodNutrition', {
    recordId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nutrientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      allowNull: false
    },
  }, {});
  FoodNutrition.associate = function(models) {
    FoodNutrition.belongsTo(models.FoodRecord, {
      foreignKey: 'recordId',
      onDelete: 'CASCADE'
    });
    FoodNutrition.belongsTo(models.Nutrient, {
      foreignKey: 'nutrientId',
      onDelete: 'CASCADE'
    });
  };
  return FoodNutrition;
};
