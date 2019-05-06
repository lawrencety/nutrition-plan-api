'use strict';
module.exports = (sequelize, DataTypes) => {
  const FoodRecord = sequelize.define('FoodRecord', {
    NDBid: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  FoodRecord.associate = function(models) {
    // associations can be defined here
  };
  return FoodRecord;
};