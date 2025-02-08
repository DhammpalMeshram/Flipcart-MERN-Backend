import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {resetDefaultData} from "./defaultData.js";
import router from "./routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("", router);

//function to connect database cloud
const dataBaseConnect = async()=>{
    console.log('connecting with the database.......');
    try{
        // await mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true});
        await mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology: true, useNewUrlParser: true});

        console.log("Database is connected successfully");
        // resetDefaultData();
    }
    catch(err){
        console.log('Failed to connect with database');
        console.log(err);
    }
}

app.listen(process.env.PORT, ()=>{
    console.log("server is running at port "+process.env.PORT);
    dataBaseConnect();
})
