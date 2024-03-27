const express=require( 'express')
const database=require('./config/db')

//com
require('dotenv').config()

const adminRoute= require('./routes/adminRoutes');
const providerRoute = require('./routes/providerRoutes');
const authRoute = require('./routes/authRoutes');
const customerRoute =require ('./routes/customerRoutes');
const eventsRoute = require('./routes/eventsRoutes');
const bookingRoute = require('./routes/bookingRoutes')
const feedbackRoute = require('./routes/feedbackRoutes');
const notificationRoute = require('./routes/notificationRoutes');


const  app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


/* app.use('/api/admin',adminRoute);
app.use('/api/provider',providerRoute);
app.use('/api/auth',authRoute);
app.use('/api/customer',customerRoute);

app.use('/api/feedback',feedbackRoute);
 */

app.use('/api/notification',notificationRoute);
app.use('/api/events',eventsRoute);
app.use('/api/bookings',bookingRoute);






const port=process.env.PORT 
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})