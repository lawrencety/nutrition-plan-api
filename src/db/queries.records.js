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
  },

  updateRecord(req, updatedRecord, callback) {
    Record.findByPk(req.body.id)
    .then((record) => {
      if (!record) {
        return callback('Record not found');
      } else {
        record.update(updatedRecord, {
          fields: Object.keys(updatedRecord)
        })
        .then(() => {
          callback(null, record);
        })
        .catch((err) => {
          callback(err);
        })
      }
    })
  },

  deleteRecord(id, callback) {
    Record.findByPk(id)
    .then((record) => {
      if (!record) {
        return callback('Record not found')
      } else {
        record.destroy()
        .then((res) => {
          callback(null, res);
        })
        .catch((err) => {
          callback(err);
        })
      }
    })
  }

}
