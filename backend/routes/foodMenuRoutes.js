const express = require('express');
const router = express.Router();
const upload = require("../middlewares/uploadImage");

const {
    getFoodMenu,
    createFoodMenu,
    updateFoodMenu,
    deleteFoodMenu,
} = require('../controllers/foodMenuController');

router.get('/:ID', getFoodMenu);
router.post('/',upload.array("picture",3), createFoodMenu);
router.put('/update/:ID',upload.array("picture",3), updateFoodMenu);
router.delete('/delete/:ID', deleteFoodMenu);



module.exports = router;