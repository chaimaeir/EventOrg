const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');




const providerSchema = new mongoose.Schema({
  provider_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'provider',
    required: false
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    validate: [isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    minlength: [6, 'Minimum password length is 6 characters'],
  },
  companyName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  events_id: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  }],
  portfolio: [{
    type: String,
    
  }],
  location: {
    type: {
      city: String,
      street: String,
      country: String,
      postalCode: String
    }
  },
  businessHours: {
    type: {
      openingTime: String,
      closingTime: String
    }
  }
});
providerSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

providerSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;
