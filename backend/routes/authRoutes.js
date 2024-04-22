const express = require('express'); 
const router = express.Router();  
const authController = require ("../controllers/authController");
const customerController = require ("../controllers/customerController");
const requireAuth = require ("../middlewares/authentication");




// Route for creating a new customer
router.post('/customer/register', authController.registerCustomer);
router.post('/customer/login', customerController.loginCustomer);

// Route for registering a new provider
router.post('/provider/register', authController.registerProvider);
router.post('/provider/login', authController.loginProvider);



module.exports = router; 