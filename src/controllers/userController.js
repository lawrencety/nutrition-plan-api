const userQueries = require('../../src/db/queries.users.js');
const passport = require('passport')

module.exports = {
  create(req, res, next) {
    let newUser = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      password_conf: req.body.password_conf
    }
    userQueries.createUser(newUser, (err, user) => {
      if(err) {
        console.log(err);
        let returnData = {
          statusCode: 400,
          message: 'Bad Request',
          data: err
        };
        res.json(returnData)
      } else {
        passport.authenticate('local') (req, res, () => {
          let returnData = {
            statusCode: 200,
            message: 'Success',
            data: user
          };
          res.json(returnData)
        })
      }
    })
  },

  signIn(req, res, next) {
    passport.authenticate('local') (req, res, () => {
      if (!req.user) {
        let returnData = {
          statusCode: 400,
          message: 'Bad Request',
        };
        res.json(returnData)
      } else {
        let returnData = {
          statusCode: 200,
          message: 'Success',
          user: req.user
        };
        res.json(returnData)
      }
    })

  }
}
