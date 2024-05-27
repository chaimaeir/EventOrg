const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
const crypto = require("crypto")


const customerSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
  phoneNumber: {
    type: Number,
    required : false
  },
  registeredAt: {
    type: Date,
    default: Date.now
  },
  profilePicture: {
    type: String,
    required : false
  },
  address: {
    type: {
      street: String,
      city: String,
      postalCode: String
    },
    required : false
  },
  savedEvents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  }],
  payment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Payment'
  },
  resetPasswordCode: {
    type: String,
    default: null
  },
  resetPasswordExpires: {
    type: Date,  
    default: null
  },
  
});


// Hash password before saving to the database
customerSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
customerSchema.methods.comparePassword = async function (candidatePassword) {
  return new Promise((resolve,reject)=>{
    bcrypt.compare(candidatePassword, this.password, (err, res) => {
      if (err) throw reject(err)
      resolve(res)
  })
})
}



const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
