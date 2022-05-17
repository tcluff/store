import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import mongoose from "mongoose";
import store from './routes/storeRoutes.js';

dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use(cors({
    origin: "*"
}));

mongoose.connect(process.env.MONGO_URI);

app.use("/store", store); 

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
}); 
