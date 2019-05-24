const express = require('express');
const controller = require('../controllers/music');
const router = express.Router();

// localhost:5000/music/getall
router.post('/getall', controller.getAll);
// localhost:5000/music/update
router.post('/update', controller.update);
// localhost:5000/music/add
router.post('/add', controller.add);

module.exports = router;