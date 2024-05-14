const Customer = require('../models/customer'); 
const Provider = require('../models/provider');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'fallbackSecret', {
    expiresIn: '30d',
  });
};




//  register a provider
exports.registerProvider = async (req, res) => {
  try {
    const {companyName, email, password } = req.body;

    // Check if the email is already registered
    const existingProvider = await Provider.findOne({ email });
    if (existingProvider) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Create a new provider instance
    const newProvider = new Provider({
      companyName,
      email,
      password
      
    });

    // Save the new provider to the database
    const savedProvider = await newProvider.save();

    res.status(201).json(savedProvider);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};





// Create a new customer profile
exports.registerCustomer = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email is already registered
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Create a new customer instance
    const newCustomer = new Customer({
      username,
      email,
      password
    });

    // Save the new customer to the database
    const savedCustomer = await newCustomer.save();

    res.status(201).json(savedCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



exports.loginProvider = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const provider= await Provider.findOne({ email });

  if (provider&& (await provider.comparePassword(password))) {
    res.send({ message: "Logged succesfully"})
    res.json({
      _id: provider._id,
      providername: provider.username,
      email: provider.email,
      token: generateToken(provider._id),
    });
  } else {
    res.status(401).send('Invalid credentials');
  }
});



