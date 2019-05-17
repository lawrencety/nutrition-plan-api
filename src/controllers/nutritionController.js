const nutritionQueries = require('../db/queries.nutrition.js');

module.exports = {
  create(req, res, next) {
    const newNutrition = [];
    let conversion = null;
    req.body.nutrients.forEach((nutrient) => {
      switch(req.body.unit) {
        case 'g':
          conversion = 0.01;
        case 'oz':
          conversion = 0.035274
      }
      newNutrition.push({
        nutrientId: nutrient.nutrient_id,
        recordId: recordId,
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
        res.json(returnData)
      } else {
        console.log(nutrients)
        let returnData = {
          statusCode: 200
          message: 'Success',
          data: nutrients
        };
        res.json(returnData)
      }
    })
  },


}
