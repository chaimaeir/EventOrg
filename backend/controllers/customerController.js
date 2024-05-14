const Customer = require("../models/customer"); 
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'fallbackSecret', {
    expiresIn: '30d',
  });
};


exports.loginCustomer = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const customer = await Customer.findOne({ email });

  if (customer && (await customer.comparePassword(password))) {
    // res.send({ message: "Logged succesfully"})
    res.status(200).json({
      _id: customer._id,
      customername: customer.username,
      email: customer.email,
      token: generateToken(customer._id),
    });
   
  } else {
    res.status(401).send('Invalid credentials');
  }
});


// Route to create a customer



// Get customer by Id
exports.getCustomerById = async (req, res) => {
  try {
    
    const customer = await Customer.findById(req.params.CustomerId);

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Get all customers
exports.getAllCustomers = asyncHandler(async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});




//Update customer 
exports.updateCustomer = async (req, res) => {
    try {
      const updatedCustomer = await Customer.findByIdAndUpdate(req.params.CustomerId, req.body, { new: true });
      if (!updatedCustomer) {
        return res.status(404).json({ message: "Customer not found" });
      }
      res.status(200).json(updatedCustomer);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }


//deleting customer profile
exports.deleteCustomer  = async (req, res) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.CustomerId);
    if (!deletedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

