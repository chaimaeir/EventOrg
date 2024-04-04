const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    user_id: {

        type: mongoose.Schema.Types.ObjectId,

        ref: 'userID'

    },
    recipient_type : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
    is_read : {
        type : Boolean,
        required : true
    },
},{
    timestamps :true
});

const notification = new mongoose.model('notifications', notificationSchema);

module.exports = notification;