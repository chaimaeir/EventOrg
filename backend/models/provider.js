const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");

const providerSchema = new mongoose.Schema({
  provider_id: {
    type: mongoose.Schema.Types.ObjectId,
    // ref: 'provider',
    required: false,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    minlength: [6, "Minimum password length is 6 characters"],
  },
  companyName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  events_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
  portfolio: [
    {
      type: String,
    },
  ],
  location: {
    type: {
      city: String,
      street: String,
      country: String,
      postalCode: String,
    },
  },
  businessHours: {
    type: {
      openingTime: String,
      closingTime: String,
    },
  },
});
providerSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

providerSchema.methods.comparePassword = async function (candidatePassword) {
  return new Promise((resolve,reject)=>{
    bcrypt.compare(candidatePassword, this.password, (err, res) => {
      if (err) throw reject(err)
      resolve(res)
  })
})
}

const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;
