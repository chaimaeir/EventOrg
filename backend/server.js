const express = require ('express')
const DATABASE = require ('./config/db')
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const  app = express();

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

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json({
  verify: function (req, res, buf) {
      if (req.originalUrl.startsWith('/webhook')) {
        req.rawBody = buf.toString();
      }}
}))
app.use(express.urlencoded({ extended: false }))

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

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


app.use('/api/admin',adminRoute);
app.use('/api/provider',providerRoute);
app.use('/api/auth',authRoute);
app.use('/api/customer',customerRoute);
app.use('/api/events',eventsRoute);
app.use('/api/bookings',bookingRoute);
app.use('/api/foodMenu',foodMenuRoute);
app.use('/api/drinksMenu',drinksMenuRoute);
app.use('/api/payment',paymentRoute);
// app.use('/api/feedback',feedbackRoute);
app.use('/api/notification',notificationRoute);

app.listen(3000, ()=>{
  console.log(`Server is running on 3000`)
})