const Record = require('./models').FoodRecord;

module.exports = {
  addRecord(newRecord, callback) {
    return Record.create(newRecord)
    .then((record) => {
      callback(null, record);
    })
    .catch((err) => {
      callback(err);
    })
  },

  getUserRecords(userId, callback) {
    Record.findAll({
      where: {userId: userId}
    })
    .then((records) => {
      callback(null, records);
    })
    .catch((err) => {
      callback(err);
    })
  }

}
