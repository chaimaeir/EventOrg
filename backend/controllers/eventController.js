const event = require('../models/event');
var ObjectId = require('mongodb').ObjectId; 
const bodyParser = require('body-parser');



const getEvents = ((req,res) => {
     event
        .find()
        .then((result)=>res.status(200).json(result))
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
    console.log(req.body.guestNumber)
    console.log(req.files);
    if(!req.files){
        return res.status(400).json({message:'No files were uploaded.'});
    }
    const paths = req.files.map(file => file.path)
    const newEvent = new event({
        provider_id: req.body.provider_id,
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        price: parseFloat(req.body.price),
        city:req.body.city,
        date: Date.now(),
        guestNumber: parseInt(req.body.guestNumber),
        pictures : paths,
        venue: req.body.venue,
        theme: req.body.theme,
        foodMenu: req.body.foodMenuId,
        drinksMenu:req.body.drinksMenuId
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
    console.log(id);
    console.log(req.body);
    let paths;
    if(req.files){
        paths = req.files.map(file => file.path)
    }
    event
        .findOneAndUpdate({"_id" : new  ObjectId(id) },{$set: {
            name : req.body.name,
            type: req.body.type,
            description: req.body.description,
            date: req.body.date,
            guestNumber: req.body.guestNumber,
            pictures: paths,
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
    deleteEvent,
}