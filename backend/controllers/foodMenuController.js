const foodMenu = require("../models/foodMenu");
var ObjectId = require('mongodb').ObjectId; 

const getFoodMenu = (async (req,res)=>{
        const id = req.params.ID;
        try {
            const result = await foodMenu.findOne({"_id" : new  ObjectId(id) })  
                if(result) {
                    res.status(200).json({ foodMenu: result });
                } else {
                    res.status(404).json({ message: ' not found' });
                }   
        } catch (error) {
            res.status(500).json({message : error.message})
        }
        
    }
);

const createFoodMenu = ((req, res) => {
    if(!req.files){
            return res.status(400).json({message:'No files were uploaded.'});
    }

    const paths = req.files.map(file => file.path)

    const newFoodMenu = new foodMenu({
        menu:[{
            name: req.body.name,
            category: req.body.category,
            pictures : paths,    
        }]
       
})
    newFoodMenu
        .save()
        .then(()=>res.status(200).json({message: 'food menu added to database'}))   
        .catch((err)=>res.status(404).json({message : err.message})); 
});

const updateFoodMenu = ((req,res)=>{
    console.log(req.body.category);
    if(!req.files){
        return res.status(400).json({message:'No files were uploaded.'});
    }
    
    //here you'll need later to change the insertion method in postman, you need to enter
    //an array of objects, so you'll create here an array , and insert inside it the objects entreed 
    //add it to the menu later
    const paths = req.files.map(file => file.path);
    const id = req.params.ID;
    foodMenu
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

const deleteFoodMenu= ((req,res)=>{
    const id = req.params.ID;
    foodMenu
        .findOneAndDelete({"_id" : new  ObjectId(id) })
        .then((result)=>{
            if(result)
                res.status(200).json({message : 'menu deleted'});
            else
                res.status(404).json({message: 'menu not found'})})
        .catch((err)=>res.status(500).json({message : err.message}))
});

module.exports = {
    getFoodMenu,
    createFoodMenu,
    updateFoodMenu,
    deleteFoodMenu,
}