const express = require ('express')
const DATABASE = require ('./config/db')
const bodyParser = require('body-parser');


require('dotenv').config()

const adminRoute= require('./routes/adminRoutes');
const providerRoute = require('./routes/providerRoutes');
const authRoute = require('./routes/authRoutes');
const customerRoute =require ('./routes/customerRoutes');
const eventsRoute = require('./routes/eventsRoutes');
const feedbackRoute = require('./routes/feedbackRoutes');
const notificationRoute = require('./routes/notificationRoutes');


const app = express();
app.use(bodyParser.json());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api/admin',adminRoute);
app.use('/api/provider',providerRoute);
app.use('/api/auth',authRoute);
app.use('/api/customer',customerRoute);
// app.use('/api/events',eventsRoute);
// app.use('/api/feedback',feedbackRoute);
// app.use('/api/notification',notificationRoute);





//const port=process.env.PORT 
app.listen(3000, ()=>{
    console.log(`Server is running on 3000`)
})