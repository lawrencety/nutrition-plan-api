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
    meal: {
      type: DataTypes.STRING,
      /*
        breakfast
        lunch
        dinner
        snack
      */
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false
    }
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
