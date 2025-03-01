const express = require('express');
const router = express.Router();
const validateSession = require('../middleware/validateSession');
const purchaseOrderController = require('../controllers/purchaseOrderController');

router.post('/', validateSession, purchaseOrderController.createPurchaseOrder);
router.get('/', validateSession, purchaseOrderController.getAllPurchaseOrders);
router.get('/filter', validateSession, purchaseOrderController.filterPurchaseOrders);
router.get('/filtered', validateSession, purchaseOrderController.getFilteredPurchaseOrders);

module.exports = router;