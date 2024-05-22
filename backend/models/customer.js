const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');


const customerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
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
  }
});

// fire a function before doc saved to db
customerSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

customerSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};




const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
