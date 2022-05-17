import express from "express";
import envVars from './config/envVars.js';
import cors from 'cors';
import mongoose from "mongoose";
import store from './routes/storeRoutes.js';

const app = express();

const PORT = envVars.PORT;

app.use(express.json());

app.use(cors({
    origin: "*"
}));

mongoose.connect(envVars.MONGO_URI);

app.use("/store", store); 

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
}); 
