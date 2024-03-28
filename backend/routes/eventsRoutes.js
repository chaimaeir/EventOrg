const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); 
    }
});
 
const upload = multer({ storage: storage });

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
router.post('/',upload.array("file",3), createEvent);
router.get('/search/:keyword', searchEvent);
router.put('/update/:ID', updateEvent);
router.delete('/delete/:ID', deleteEvent);



module.exports = router;