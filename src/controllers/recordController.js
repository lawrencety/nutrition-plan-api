const recordQueries = require('../db/queries.records.js');

module.exports = {
  show(req, res, next) {
    recordQueries.getUserRecords(req.params.userId, (err, records) => {
      if (err) {
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
          data: records
        };
        res.json(returnData)
      }
    })
  },

  create(req, res, next) {
    let newRecord = {
      ndbno: req.body.ndbno,
      name: req.body.name,
      userId: req.body.userId,
      meal: req.body.meal,
      amount: req.body.amount,
      unit: req. body.unit
    };
    recordQueries.addRecord(newRecord, (err, record) => {
      if (err) {
        console.log(err);
        let returnData = {
          statusCode: 400,
          message: 'Bad Request',
          data: err
        };
        res.json(returnData)
      } else {
        console.log(record)
        let returnData = {
          statusCode: 200,
          message: 'Success',
          data: record
        };
        res.json(returnData)
      }
    })
  },

  update(req, res, next) {
    recordQueries.updateRecord(req, req.body, (err, record) => {
      if (err) {
        console.log(err);
        let returnData = {
          statusCode: 400,
          message: 'Bad Request',
          data: err
        };
        res.json(returnData)
      } else {
        console.log(record)
        let returnData = {
          statusCode: 200,
          message: 'Success',
          data: record
        };
        res.json(returnData)
      }
    })
  },

  destroy(req, res, next) {
    recordQueries.deleteRecord(req.body.id, (err, deletedRecordsCount) => {
      if (err) {
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
          data: deletedRecordsCount
        };
        res.json(returnData)
      }
    })
  }

}
