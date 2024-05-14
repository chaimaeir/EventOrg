const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
let endpointSecret;
const payment = require("../models/payment")
// endpointSecret = "whsec_1469c68971d116ecdeb84f4aa07482526792a8ac9dcaa4d8def929dab801a65c";

const createCheckoutSession = (req, res) => {
  const session = stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: req.body.currency,
          product_data: {
            name: req.body.name
          },
          unit_amount: req.body.amount * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/api/payment/success`,
    cancel_url: `${process.env.CLIENT_URL}/api/payment/cancel`,
  })
    .then((session) => res.status(200).json({ url: session.url }))
    .catch((err) => res.send(err))

};

const webhookHandler = async (req, res) => {
  let data;
  let eventType;

  if (endpointSecret) {
    let event;
    let signature = req.headers['stripe-signature'];

    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        endpointSecret
      );
    } catch (err) {
      console.log(`Webhook signature verification failed.`);
      return res.sendStatus(400);
    }

    data = event.data;
    eventType = event.type;
  } else {

    data = req.body.data;
    eventType = req.body.type;
  }

  if (eventType === 'checkout.session.completed') {
    const session = data.object;
    const paymentIntentId = session.payment_intent;
    console.log(paymentIntentId);

    try {
      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
      const transactionId = paymentIntent.latest_charge;
      console.log(`Transaction ID: ${transactionId}`);
      const newPayment = payment({
        transaction_id: transactionId
      });
      newPayment
        .save()
        .then(() => console.log("payment added to database"))
        .catch((err) => console.log(err.message));
    } catch (err) {
      console.error(`Error fetching PaymentIntent: ${err.message}`);
    }
    console.log(`🔔  Payment received!`);
  }

  res.sendStatus(200);
};

module.exports = {
  createCheckoutSession,
  webhookHandler
}