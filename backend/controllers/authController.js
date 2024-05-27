const Customer = require("../models/customer");
const Provider = require("../models/provider");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

//  register a provider
const registerProvider = async (req, res) => {
  const { companyName, email, password } = req.body;
  try {
    const newProvider = new Provider({
      companyName,
      email,
      password: password,
    });
    await newProvider.save();
    res.status(201).json({ message: "Provider registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new customer profile
const registerCustomer = async (req, res) => {
    const { userName, email, password } = req.body;
    try {
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Create a new customer instance
    const newCustomer = new Customer({
      userName,
      email,
      password: password,
    });

    // Save the new customer to the database
     await newCustomer.save();

    res.status(201).json({ message: "Customer registered successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginCustomer = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find customer by email
    const customer = await Customer.findOne({ email });
    if (!customer) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare provided password with stored hashed password
    const isMatch = await customer.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Successful login
    res.json({
      message: "Logged in successfully",
      _id: customer._id,
      customername: customer.userName,
      email: customer.email,
      token: generateToken(customer._id),
    });
  } catch (error) {
    // Catch any other errors
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

const loginProvider = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    
    const provider = await Provider.findOne({ email });
    if (!provider) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isMatch = await provider.comparePassword(password)
    console.log(isMatch)
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.json({
      message: "Logged in successfully",
      _id: provider._id,
      providername: provider.username,
      email: provider.email,
      token: generateToken(provider._id),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Function to request a password reset
const requestReset = async (req, res) => {
  try {
    const { email } = req.body;

    // Find user by email in the database
    const user = await Customer.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }

    // Generate unique code for password reset
    const code = crypto.randomBytes(20).toString("hex");
    user.resetPasswordCode = code;
    user.resetPasswordExpires = Date.now() + 300000; // 5 minutes from now
    await user.save();

    // Create transporter for sending email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configure email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Password Reset",
      text: `You have requested the reset of the password for your account.\n\n
                 Please click on the following link: http://localhost:3000/api/auth/password/reset/${code}\n\n
                 The link will expire in 5 minutes.\n\n
                 If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    // Send password reset email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to reset user's password
const passwordReset = async (req, res) => {
  try {
    const code = req.params.code;
    const newPassword = req.body.newPassword;

    // Find user by reset password code and check expiration time
    const user = await Customer.findOne({
      resetPasswordCode: code,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // Hash the new password and update user's password in the database
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetPasswordCode = null;
    user.resetPasswordExpires = null;
    await user.save();

    // Generate JWT token for authentication
    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send response with user details and token
    res.status(200).json({ message: "Password reset successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  requestReset,
  passwordReset,
  registerProvider,
  registerCustomer,
  loginProvider,
  loginCustomer,
  generateToken,
};
