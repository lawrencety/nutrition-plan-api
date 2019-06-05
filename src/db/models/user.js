'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {msg: 'must be a valid email'}
      },

    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
      /*
        0 = standard
        1 = premium
        2 = admin
      */
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.FoodRecord, {
      foreignKey: 'userId',
      as: 'records'
    })
  };
  return User;
};
