'use strict';
module.exports = (sequelize, DataTypes) => {
  const FoodRecord = sequelize.define('FoodRecord', {
    ndbno: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  }, {});
  FoodRecord.associate = function(models) {
    FoodRecord.hasMany(models.FoodNutrition, {
      foreignKey: 'recordId',
      as: 'nutrients'
    });
    FoodRecord.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return FoodRecord;
};
