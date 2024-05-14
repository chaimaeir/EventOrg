const notification = require('../models/notification');
var ObjectId = require('mongodb').ObjectId; 


const getNotification = (async (req,res)=>{
    const id = req.params.ID;
    try {
        const result = await notification.findOne({"_id" : new  ObjectId(id) })  
            if(result) {
                res.status(200).json({ notification: result });
            } else {
                res.status(404).json({ message: ' not found' });
            }   
    } catch (error) {
        res.status(500).json({message : error.message})
    }
});

const createNotification = ((req, res) => {
    const newNotification = new notification({
        user_id: req.body.user_id,
        recipient_type : req.body.recipient_type,
        type: req.body.type,
        message: req.body.message,
        is_read: req.body.is_read
    })
    newNotification
        .save()
        .then(()=>res.status(200).json({message: 'notification added to database'}))   
        .catch((err)=>res.status(404).json({message : err.message})); 
});



const deleteNotification = ((req,res)=>{
    const id = req.params.ID;
    notification
        .findOneAndDelete({"_id" : new  ObjectId(id) })
        .then((result)=>{
            if(result)
                res.status(200).json({message : 'notification deleted'});
            else
                res.status(404).json({message: 'notification not found'})})
        .catch((err)=>res.status(500).json({message : err.message}))
});

module.exports = {
    getNotification,
    createNotification,
    deleteNotification
}