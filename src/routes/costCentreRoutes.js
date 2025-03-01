const express = require('express');
const router = express.Router();
const costCentreController = require('../controllers/costCentreController');

router.post('/', costCentreController.createCostCentre);
router.get('/', costCentreController.getAllCostCentres);

module.exports = router;