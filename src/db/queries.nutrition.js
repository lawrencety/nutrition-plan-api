const Nutrition = require('./models').FoodNutrition;

module.exports = {
  addNutrition(newNutrition, callback) {
    return Nutrition.bulkCreate(newNutrition)
    .then((nutrition) => {
      callback(null, nutrition);
    })
    .catch((err) => {
      callback(err);
    })
  },
}
