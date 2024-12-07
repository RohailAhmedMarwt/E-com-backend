import express from 'express'
import Connection from './db/connection.js'
import dotenv from "dotenv"
import cors from "cors"
import buyerRouter from './Routers/buyersRouter/buyers.Router.js'
import sellerRouter from './Routers/sellersRouter/sallers.Router.js'
import productRouter from './Routers/sellersRouter/product.Router.js'


const port = 8000 || process.env.port
dotenv.config()
const app = express()
Connection()
app.use(express.json())
app.use(cors())
const Options = {
    origin: 'https://e-commerce-zeta-peach.vercel.app',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(Options));



app.use("/api/buyers/" , buyerRouter)
app.use("/api/sellers/" , sellerRouter)
app.use("/api/products/" , productRouter)
app.listen(port ,()=>{
    console.log(`backend is runing on port ${port}`);
    
}) 