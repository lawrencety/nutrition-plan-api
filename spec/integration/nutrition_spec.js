const request = require('request');
const base = 'http://localhost:5000/records/';
const server = require('../../src/server');
const sequelize = require('../../src/db/models/index').sequelize;
const Record = require('../../src/db/models').FoodRecord;
const User = require('../../src/db/models').User;
const Nutrition = require('../../src/db/models').FoodNutrition;
const Nutrient = require('../../src/db/models').Nutrient;

describe('routes: records', () => {

  beforeEach((done) => {
    this.record;
    this.user;
    this.nutrition;
    User.findOne({where: {email: 'bob@example.com'}})
    .then((user) => {
      if (user) {
        this.user = user;
        done();
      } else {
        User.create({
          email: 'bob@example.com',
          password: 'Password1',
          firstName: 'Robert',
          lastName: 'Example'
        })
        .then((user) => {
          this.user = user;
          done();
        })
      }
    })
  })

  describe('show nutrients', () => {
    it('should print all nutrients', (done) =>{
      Nutrient.findAll()
      .then((nutrients) => {
        expect(nutrients).not.toBeNull();
        done()
      })
      .catch((err) => {
        console.log(err);
        done();
      })
    })
  })

  describe('create record', () => {
    it('should create a new record', (done) => {
      const options = {
        url: `${base}create`,
        form: {
          ndbno: 12345680,
          name: 'Lamb Chops',
          userId: this.user.id,
          meal: 'dinner',
          amount: 14.2,
          unit: 'oz',
          nutrients: [
            {nutrient_id: 255, value: 36},
            {nutrient_id: 208, value: 14}
          ]
        }
      }
      request.post(options, (err, res, body) => {
        Record.findOne({
          where: {ndbno: 12345680}
        })
        .then((record) => {
          Nutrition.findAll({
            where: {recordId: record.id}
          })
          .then((nutrition) => {
            console.log(nutrition);
            expect(nutrition).not.toBeNull();
            expect(nutrition.length).toBe(2);
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          })
        })
      })
    })
  })

})
