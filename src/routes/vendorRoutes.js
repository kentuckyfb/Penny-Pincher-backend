const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');

router.get('/', vendorController.getAllVendors);
router.post('/createVendor', vendorController.createVendor);

module.exports = router;