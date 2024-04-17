const express = require('express');
const router = express.Router();

const {
    getBooking,
    createBooking,
    updateBooking,
    deleteBooking
} = require('../controllers/bookingController');


router.get('/:ID', getBooking);
router.post('/', createBooking);
router.put('/update/:ID', updateBooking);
router.delete('/delete/:ID', deleteBooking);



module.exports = router;