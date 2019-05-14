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

  getUserRecords(id, callback) {
    Record.findAll({
      where: {userId: id}
    })
    .then((records) => {
      callback(null, records);
    })
    .catch((err) => {
      callback(err);
    })
  }

}
