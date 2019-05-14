const express = require("express");
const router = express.Router();
const recordController = require('../controllers/recordController')

router.get('/records/:userId', recordController.show);
router.post('/records/create', recordController.create);

module.exports = router;
