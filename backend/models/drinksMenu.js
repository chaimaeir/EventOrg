const mongoose = require('mongoose');

const drinksMenuSchema = new mongoose.Schema({
    menu: [{
        name: {
            type: String,
            required: true
        },
        pictures: [{
            type: String,
            required: true
        }],
        category: {
            type: String
        }
    }],
}, { timestamps: true });

const DrinksMenu = new mongoose.model("drinksMenus", drinksMenuSchema);

module.exports = DrinksMenu;