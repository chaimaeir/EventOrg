const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

// Generate token function
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Register a new admin
exports.registerAdmin = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Check if admin already exists
  const existingAdmin = await Admin.findOne({ email });
  if (existingAdmin) {
    res.status(400).json({ message: 'Admin already exists' });
    return;
  }

  // Create a new admin
  const admin = await Admin.create({
    username,
    email,
    password
  });

  res.status(201).json({
    _id: admin._id,
    username: admin.username,
    email: admin.email,
    token: generateToken(admin._id),
  });
});

// Controller to login an admin
exports.loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if admin exists
  const admin = await Admin.findOne({ email });
  if (!admin) {
    res.status(401).json({ message: 'Invalid email or password' });
    return;
  }

  // Check if password matches
  const isMatch = await admin.comparePassword(password);
  if (!isMatch) {
    res.status(401).json({ message: 'Invalid email or password' });
    return;
  }
  res.send({ message: "Logged succesfully"})

  res.json({
    _id: admin._id,
    username: admin.username,
    email: admin.email,
    token: generateToken(admin._id),
  });
});
