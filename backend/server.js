const express=require( 'express')
const database=require('./config/db')
require('dotenv').config()

const adminRoute= require('./routes/adminRoutes');
const providerRoute = require('./routes/providerRoutes');
const authRoute = require('./routes/authRoutes');
const customerRoute =require ('./routes/customerRoutes');
const eventsRoute = require('./routes/eventsRoutes');
const bookingRoute = require('./routes/bookingRoutes')
const feedbackRoute = require('./routes/feedbackRoutes');
const notificationRoute = require('./routes/notificationRoutes');
const foodMenuRoute = require("./routes/foodMenuRoutes");
const drinksMenuRoute = require("./routes/drinksMenuRoutes");
const paymentRoute = require("./routes/paymentRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");



const  app = express();

app.use(express.json({
    verify: function (req, res, buf) {
        if (req.originalUrl.startsWith('/webhook')) {
          req.rawBody = buf.toString();
        }}
}))
app.use(express.urlencoded({ extended: false }))

/* app.use('/api/admin',adminRoute);
app.use('/api/provider',providerRoute);
app.use('/api/auth',authRoute);
app.use('/api/customer',customerRoute);

app.use('/api/feedback',feedbackRoute);
 */


app.use('/api/notification',notificationRoute);
app.use('/api/events',eventsRoute);
app.use('/api/bookings',bookingRoute);
app.use('/api/events/foodMenu',foodMenuRoute);
app.use('/api/events/drinksMenu',drinksMenuRoute);
app.use('/api/payment',paymentRoute);

const options = {
  definition: {
    openapi: "3.0.0",
    servers: [
      {
        url: "http://localhost:3000/",
      }
    ],
  },
  apis: ["./swagger/*.js"]
};
const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
  );



const port=process.env.PORT 
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})