const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadImage')

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
router.post('/',upload.array("picture",12), createEvent);
router.get('/search/:keyword', searchEvent);
router.post('/update/:ID',upload.array("picture",12),updateEvent);
router.delete('/delete/:ID', deleteEvent);



module.exports = router;