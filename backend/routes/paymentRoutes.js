const express = require('express');
const router = express.Router();
const createCheckoutSession = require("../controllers/paymentController")



router.post('/create-checkout-session', createCheckoutSession);

router.get('/success',(req,res)=>{
    res.send("payment accepted");
});

router.get('/cancel',(req,res)=>{
    res.send("payment denied");
})

module.exports = router;