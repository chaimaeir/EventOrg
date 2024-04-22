const express = require('express');
const router = express.Router();
const providerController = require('../controllers/providerController');
const provider = require('../models/provider');



// Route for getting all providers
router.get('/', providerController.getAllProviders);

// Route for getting provider by ID
router.get('/:providerId', providerController.providerById);

// Route for updating provider profile
router.patch('/:providerId', providerController.updatedProvider);

// Route for deleting provider profile
router.delete('/:providerId', providerController.deleteProvider);

module.exports = router;


