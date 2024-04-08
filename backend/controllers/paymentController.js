const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = (req, res) => {
    const session = stripe.checkout.sessions.create({
      line_items: [
        {
          price_data : {
              currency : req.body.currency,
              product_data : {
                  name: req.body.name
              },
              unit_amount : req.body.amount * 100,
          },
          quantity: req.body.quantity,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/api/payment/success`,
      cancel_url: `${process.env.CLIENT_URL}/api/payment/cancel`,
    })
      .then((session)=>res.status(200).json({url : session.url}))
      .catch((err)=>res.send(err))
  
}; 

module.exports = createCheckoutSession;