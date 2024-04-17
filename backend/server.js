const express = require ('express')
const DATABASE = require ('./config/db')
const bodyParser = require('body-parser');


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
const drinksMenuRoute = require("./routes/drinksMenuRoutes")


const app = express();
app.use(bodyParser.json());

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/admin',adminRoute);
app.use('/api/provider',providerRoute);
app.use('/api/auth',authRoute);
app.use('/api/customer',customerRoute);
// app.use('/api/events',eventsRoute);
// app.use('/api/feedback',feedbackRoute);
// app.use('/api/notification',notificationRoute);

// const multer = require('multer');
// const upload = multer({ dest : "./uploads"});




// app.post("/upload",upload.array("file",3),(req,res)=>{
//     res.send("uploaded successsfully")
// })


//app.use('/api/feedback',feedbackRoute);
 



app.use('/api/notification',notificationRoute);
app.use('/api/events',eventsRoute);
app.use('/api/bookings',bookingRoute);
app.use('/api/events/foodMenu',foodMenuRoute);
app.use('/api/events/drinksMenu',drinksMenuRoute);


//const port=process.env.PORT 
app.listen(3000, ()=>{
    console.log(`Server is running on 3000`)
})