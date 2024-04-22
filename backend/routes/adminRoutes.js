const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// POST route to register a new admin
router.post('/register', adminController.registerAdmin);

// POST route to login an admin
router.post('/login', adminController.loginAdmin);

module.exports = router;
