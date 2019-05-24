const express = require('express');
const controller = require('../controllers/music');
const router = express.Router();

// localhost:5000/music/getall
router.post('/get', controller.getAll);
// localhost:5000/music/update
router.post('/update', controller.update);
// localhost:5000/music/get
router.post('/get', controller.get);
// localhost:5000/music/add
router.post('/update', controller.add);

module.exports = router;