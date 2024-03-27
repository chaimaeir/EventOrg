const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user_id: {

        type: mongoose.Schema.Types.ObjectId,

        ref: 'users'

    },
    event_id: {

        type: mongoose.Schema.Types.ObjectId,

        ref: 'events'

    },
    schedule : {
        type : Date,
        required : true
    },
    guests_number : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    status : {
        type : String,
        required : true
    },
    additional_services : [{
        type :String,
        required :true
    }],
},
    {timestamps :true});

const Booking = new mongoose.model('bookings', bookingSchema);

module.exports = Booking;