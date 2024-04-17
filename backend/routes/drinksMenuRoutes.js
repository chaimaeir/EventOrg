const express = require('express');
const router = express.Router();
const upload = require("../middlewares/uploadImage");

const {
    getdrinksMenu,
    createDrinksMenu,
    updatedrinksMenu,
    deleteDrinksMenu,
} = require('../controllers/drinksMenuController');

router.get('/:ID', getdrinksMenu);
router.post('/',upload.array("picture",3), createDrinksMenu);
router.put('/update/:ID',upload.array("picture",3), updatedrinksMenu);
router.delete('/delete/:ID', deleteDrinksMenu);



module.exports = router;