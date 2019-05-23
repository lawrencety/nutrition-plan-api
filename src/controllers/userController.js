const userQueries = require('../../src/db/queries.users.js');

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
        let returnData = {
          statusCode: 200,
          message: 'Success',
          data: user
        };
        res.json(returnData)
      }
    })
  }
}
