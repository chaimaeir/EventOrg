const event = require('../models/event');
var ObjectId = require('mongodb').ObjectId; 


const getEvents = ((req,res) => {
     event
        .find()
        .then((result)=>res.status(200).send(result))
        .catch((err)=>res.status(404).json({message : err}));
});

const getEvent = (async (req,res)=>{
    const id = req.params.ID;
    try {
        const result = await event.findOne({"_id" : new  ObjectId(id) })  
            if(result) {
                res.status(200).json({ event: result });
            } else {
                res.status(404).json({ message: ' not found' });
            }   
    } catch (error) {
        res.status(500).json({message : error.message})
    }
    
});

const createEvent = ((req, res) => {
    const newEvent = new event({
        provider_id: req.body.provider_id,
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        price: req.body.price,
        city:req.body.city,
        date: Date.now(),
        guestNumber: req.body.guestNumber,
        pictures: req.body.pictures,
        venue: req.body.venue,
        theme: req.body.theme,
        foodmMenu: req.body.foodmMenu,
        drinksMenu: req.body.drinksMenu
    })
    newEvent
        .save()
        .then(()=>res.status(200).json({message: 'event added to database'}))   
        .catch((err)=>res.status(404).json({message : err.message})); 
});

const searchEvent = ((req,res)=>{
    event.aggregate([
        {
        $search: {
            index: 'default',
            text: {
              query: req.params.keyword,
              path: ["name", "type", "theme","description"]
            }
          }
        }]).then((result)=>{
            if(result.length > 0)
                res.status(200).json({event : result});
            else
                res.status(404).json({message : ' not found'})
        }).catch((err)=>{
            res.status(500).json({message : err.message});
        });
    
});
 
const updateEvent = ((req,res)=>{
    const id = req.params.ID;
    event
        .findOneAndUpdate({"_id" : new  ObjectId(id) },{$set: {
            type: req.body.type,
            description: req.body.description,
            date: req.body.date,
            guestNumber: req.body.guestNumber,
            pictures: req.body.quantity,
            venue: req.body.venue,
            theme: req.body.theme,
            foodmMenu: req.body.foodmMenu,
            drinksMenu: req.body.drinksMenu}})
        .then((result)=>res.status(200).json({message : "updated successefully"}))
        .catch((err)=>res.status(500).json({message : err.message}))
});

const deleteEvent = ((req,res)=>{
    const id = req.params.ID;
    event
        .findOneAndDelete({"_id" : new  ObjectId(id) })
        .then((result)=>{
            if(result)
                res.status(200).json({message : 'event deleted'});
            else
                res.status(404).json({message: 'event not found'})})
        .catch((err)=>res.status(500).json({message : err.message}))
});

module.exports = {
    getEvents,
    getEvent,
    createEvent,
    searchEvent,
    updateEvent,
    deleteEvent
}