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
  try {
    const { companyName, email, password } = req.body;

    // Check if the email is already registered
    const existingProvider = await Provider.findOne({ email });
    if (existingProvider) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Create a new provider instance
    const newProvider = new Provider({
      companyName,
      email,
      password,
    });

    // Save the new provider to the database
    const savedProvider = await newProvider.save();

    res.status(201).json(savedProvider);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create a new customer profile
const registerCustomer = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email is already registered
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Create a new customer instance
    const newCustomer = new Customer({
      username,
      email,
      password,
    });

    // Save the new customer to the database
    const savedCustomer = await newCustomer.save();

    res.status(201).json(savedCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginProvider = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const provider = await Provider.findOne({ email });

  if (provider && (await provider.comparePassword(password))) {
    res.send({ message: "Logged succesfully" });
    res.json({
      _id: provider._id,
      providername: provider.username,
      email: provider.email,
      token: generateToken(provider._id),
    });
  } else {
    res.status(401).send("Invalid credentials");
  }
});

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  // incorrect email
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  // incorrect password
  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("Customer validation failed")) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "bassam secret", {
    expiresIn: maxAge,
  });
};

// controller actions
const signup_get = (req, res) => {
  res.render("signup");
};

const login_get = (req, res) => {
  res.render("login");
};

const signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const Customer = await Customer.create({ email, password });
    const token = createToken(Customer._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ Customer: Customer._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const Customer = await Customer.login(email, password);
    const token = createToken(Customer._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ Customer: Customer._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};




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
  signup_get,
  login_get,
  signup_post,
  login_post,
  logout_get,
};
