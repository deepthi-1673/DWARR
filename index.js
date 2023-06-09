import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from "cookie-parser";


import tourRoute from '../Backend/routes/tours.js';
import authRoute from '../Backend/routes/auth.js';
import userRoute from './routes/users.js';
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/bookings.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOptions ={
    origin:"http://localhost:3000",
    credentials:true
}

//database connection
mongoose.set('strictQuery',false)
 const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('MongoDb database Connected!')
    }
    catch(err){
        console.log('MongoDb database connection failed')
    }
 };


//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/tours',tourRoute);
app.use('/api/v1/users',userRoute);
app.use('/api/v1/reviews',reviewRoute);
app.use('/api/v1/booking',bookingRoute);

app.listen(port,()=>{
    connect();
    console.log("Server is running on port:",port );
})