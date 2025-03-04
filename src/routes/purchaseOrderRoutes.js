const express = require('express');
const router = express.Router();
const validateSession = require('../middleware/validateSession');
const purchaseOrderController = require('../controllers/purchaseOrderController');
const { exportPurchaseOrders, getPODetails } = require('../controllers/purchaseOrderController');

router.post('/', validateSession, purchaseOrderController.createPurchaseOrder);
// router.get('/', validateSession, purchaseOrderController.getAllPurchaseOrders);
router.get('/filter', validateSession, purchaseOrderController.filterPurchaseOrders);
router.get('/', validateSession, purchaseOrderController.getPurchaseOrders );
// router.get("/requested", validateSession, getRequestedPurchaseOrders);
router.get("/export", validateSession, exportPurchaseOrders);
router.get("/:id", validateSession, getPODetails);

module.exports = router;