const userQueries = require('../../src/db/queries.users.js');

module.exports = {
  create(req, res, next) {
    let newUser = {
      email: req.body.email,
      password: req.body.password,
      password_conf: req.body.password_conf
    }
  }
}
