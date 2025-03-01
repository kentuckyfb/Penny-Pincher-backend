const express = require('express');
const router = express.Router();
const costElementController = require('../controllers/costElementController');

router.post('/', costElementController.createCostElement);
router.get('/', costElementController.getAllCostElements);

module.exports = router;