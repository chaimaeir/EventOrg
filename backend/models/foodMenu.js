const mongoose = require('mongoose');

const foodMenuSchema = new mongoose.Schema({
    menu: {
        type : [{name: {
            type: String,
            required :true
        },
        pictures:[{
            type : String,
            required: true
        }],
        category: {
            type : String,
            required: true
        }}],
        required: true
    } 
});

const FoodMenu = new mongoose.model("foodMenus", foodMenuSchema);

module.exports = FoodMenu;