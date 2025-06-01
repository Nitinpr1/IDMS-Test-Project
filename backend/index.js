import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import UserRouter from './Routes/UserRouter.js';

dotenv.config();

const PORT = 3002; 

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/",(req,res)=>{res.json("Home")});

app.use('/User',UserRouter);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,  
}).then(() => {
  app.listen(PORT, () => console.log(`Connected to DB, server listening on port: ${PORT}`));
}).catch((err) => console.log(`${err} did not connect.`));

 

