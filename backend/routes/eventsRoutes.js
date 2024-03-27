const express = require('express');
const router = express.Router();

const {
    getEvents,
    getEvent,
    createEvent,
    searchEvent,
    updateEvent,
    deleteEvent
} = require('../controllers/eventController');

router.get('/', getEvents);
router.get('/:ID', getEvent);
router.post('/', createEvent);
router.get('/search/:keyword', searchEvent);
router.put('/update/:ID', updateEvent);
router.delete('/delete/:ID', deleteEvent);



module.exports = router;