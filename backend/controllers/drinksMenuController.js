const drinksMenu = require("../models/drinksMenu");
var ObjectId = require('mongodb').ObjectId; 

const getdrinksMenu = (async (req,res)=>{
        const id = req.params.ID;
        try {
            const result = await drinksMenu.findOne({"_id" : new  ObjectId(id) })  
                if(result) {
                    res.status(200).json({ drinksMenu: result });
                } else {
                    res.status(404).json({ message: ' not found' });
                }   
        } catch (error) {
            res.status(500).json({message : error.message})
        }
        
    }
);

const createDrinksMenu = ((req, res) => {
   if(!req.files){
        return res.status(400).json({message:'No files were uploaded.'});
   }

   const paths = req.files.map(file => file.path)

    const newDrinksMenu = new drinksMenu({
        menu:[{
            name: req.body.name,
            category: req.body.category,
            pictures : paths,    
        }]
})
    newDrinksMenu
        .save()
        .then(()=>res.status(200).json({message: 'drinks menu added to database'}))   
        .catch((err)=>res.status(404).json({message : err.message})); 
});

const updatedrinksMenu = ((req,res)=>{
    if(!req.files){
        return res.status(400).json({message:'No files were uploaded.'});
    }

    const paths = req.files.map(file => file.path)
    const id = req.params.ID;
    drinksMenu
        .findOneAndUpdate({"_id" : new  ObjectId(id) },{$set: {
            menu:[{
                name: req.body.name,
                category: req.body.category,
                pictures : paths,    
            }]
        }})
        .then((result)=>res.status(200).json({message : "updated successefully"}))
        .catch((err)=>res.status(500).json({message : err.message}))
});

const deleteDrinksMenu= ((req,res)=>{
    const id = req.params.ID;
    drinksMenu
        .findOneAndDelete({"_id" : new  ObjectId(id) })
        .then((result)=>{
            if(result)
                res.status(200).json({message : 'menu deleted'});
            else
                res.status(404).json({message: 'menu not found'})})
        .catch((err)=>res.status(500).json({message : err.message}))
});

module.exports = {
    getdrinksMenu,
    createDrinksMenu,
    updatedrinksMenu,
    deleteDrinksMenu,
}