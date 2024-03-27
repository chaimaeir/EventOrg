const express = require('express');
const router = express.Router();

const {
    getNotification,
    createNotification,
    deleteNotification
} = require('../controllers/notificationController');


router.get('/:ID', getNotification);
router.post('/', createNotification);
router.delete('/delete/:ID', deleteNotification);



module.exports = router;