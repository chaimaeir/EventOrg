const mongoose = require('mongoose');
const FoodMenu = require('./foodMenu');
const DrinksMenu = require('./drinksMenu');

const eventSchema = new mongoose.Schema({
    provider_id: {

        type: mongoose.Schema.Types.ObjectId,

        ref: 'providers'

    },
    name : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    guestNumber : {
        type :Number,
        required :true
    },
    price : {
        type :Number,
        required :true
    },
    pictures : [{
        type : String
    }],
    venue : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    theme : [{
        type : String,
        required : true
    }],
    foodMenu : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'foodMenus'
    },
    drinksMenu :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'drinksMenus'
    },

},
{timestamps : true}
);

const Event = new mongoose.model('events', eventSchema);

module.exports = Event;