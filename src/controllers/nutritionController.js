const nutritionQueries = require('../db/queries.nutrition.js');

module.exports = {
  create(body, record, callback) {
    const newNutrition = [];
    let conversion = null;
    body.nutrients.forEach((nutrient) => {
      switch(body.unit) {
        case 'g':
          conversion = 0.01;
        case 'oz':
          conversion = 0.035274
      }
      newNutrition.push({
        nutrientId: nutrient.nutrient_id,
        recordId: record.id,
        amount: conversion * nutrient.value
      })
    })
    nutritionQueries.addNutrition(newNutrition, (err, nutrients) => {
      if (err) {
        console.log(err);
        let returnData = {
          statusCode: 400,
          message: 'Bad Request',
          data: err
        };
        callback(err)
      } else {
        let returnData = {
          statusCode: 200,
          message: 'Success',
          data: nutrients
        };
        callback(null, returnData)
      }
    })
  },


}
