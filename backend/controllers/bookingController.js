const booking = require('../models/booking');
var ObjectId = require('mongodb').ObjectId; 


const getBooking = (async (req,res)=>{
    const id = req.params.ID;
    try {
        const result = await booking.findOne({"_id" : new  ObjectId(id) })  
            if(result) {
                res.status(200).json({ booking: result });
            } else {
                res.status(404).json({ message: ' not found' });
            }   
    } catch (error) {
        res.status(500).json({message : error.message})
    }
    
});

const createBooking = ((req, res) => {
    const newBooking = new booking({
        user_id: req.body.user_id,
        event_id: req.body.event_id,
        schedule: req.body.schedule,
        guests_number: req.body.guests_number,
        price: req.body.price,
        status: req.body.status,
        additional_services: req.body.additional_services,
    })
    newBooking
        .save()
        .then(()=>res.status(200).json({message: 'booking added to database'}))   
        .catch((err)=>res.status(404).json({message : err.message})); 
});

 
const updateBooking = ((req,res)=>{
    const id = req.params.ID;
    booking
        .findOneAndUpdate({"_id" : new  ObjectId(id) },{$set: {
            user_id: req.body.user_id,
            event_id: req.body.event_id,
            schedule: req.body.schedule,
            guests_number: req.body.guests_number,
            price: req.body.price,
            status: req.body.status,
            additional_services: req.body.additional_services}})
        .then((result)=>res.status(200).json({message : result}))
        .catch((err)=>res.status(500).json({message : err.message}))
});

const deleteBooking = ((req,res)=>{
    const id = req.params.ID;
    booking
        .findOneAndDelete({"_id" : new  ObjectId(id) })
        .then((result)=>{
            if(result)
                res.status(200).json({message : 'booking deleted'});
            else
                res.status(404).json({message: 'booking not found'})})
        .catch((err)=>res.status(500).json({message : err.message}))
});

module.exports = {
    getBooking,
    createBooking,
    updateBooking,
    deleteBooking
}