const express = require('express');
const router = express.Router();
const {
  createCheckoutSession,
  webhookHandler} = require("../controllers/paymentController")

router.post('/create-checkout-session', createCheckoutSession);

router.get('/success',(req,res)=>{
    res.send("payment accepted");
});

router.get('/cancel',(req,res)=>{
    res.send("payment denied");
})

router.post('/webhook', express.raw({type: 'application/json'}),webhookHandler);


module.exports = router;