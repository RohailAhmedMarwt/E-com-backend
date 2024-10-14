import { loginBuyer, registerBuyer } from "../../controller/buyers/buyers.controllers.js";
import express from 'express'
const buyerRouter = express.Router();

buyerRouter.post("/register" , registerBuyer)
buyerRouter.post("/login" , loginBuyer)

export default buyerRouter;