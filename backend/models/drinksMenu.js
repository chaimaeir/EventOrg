const mongoose = require('mongoose');

const drinksMenuSchema = new mongoose.Schema({
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
            type : String
        }}],
        required: true
    } 
});

const DrinksMenu = new mongoose.model("drinksMenus", drinksMenuSchema);

module.exports = DrinksMenu;