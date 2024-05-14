const express = require('express');
const customerController = require('../controllers/customerController');
const { authorize } = require('../middlewares/authorization');
const router = express.Router();



// Route for getting all customers
router.get('/', authorize ,customerController.getAllCustomers);

// Route for getting Customer profile
router.get('/:CustomerId', customerController.getCustomerById );

// Route for updating customer profile
router.patch('/:CustomerId',  customerController.updateCustomer);

// Route for deleting customer profile
router.delete('/:CustomerId',  customerController.deleteCustomer);

module.exports = router;
