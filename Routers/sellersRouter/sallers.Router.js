import express from 'express'
import { loginSeller, registerSeller } from "../../controller/sellers/sellers.controllers.js";
const sellerRouter = express.Router();

sellerRouter.post("/register" , registerSeller)
sellerRouter.post("/login" , loginSeller)

export default sellerRouter;