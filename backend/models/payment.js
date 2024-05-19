const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    
    transaction_id : {
        type : String,
        required : true
    }
},{
    timestamps :true
});

const Payment = new mongoose.model('payments', paymentSchema);

module.exports = Payment;