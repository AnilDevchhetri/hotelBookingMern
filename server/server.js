import express from 'express'
import "dotenv/config"
import cors from "cors"
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebHooks.js';
connectDB();


const app = express();
app.use(cors()) //cors allow any backend wiht cross origin resoures sharing

//middleeware
app.use(express.json())
app.use(clerkMiddleware())


// API to listend cleark webhook
app.use("/api/clerk", clerkWebhooks)


app.get('/', (req, res) => res.send("Api is test working"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Connected to server ${PORT} `))