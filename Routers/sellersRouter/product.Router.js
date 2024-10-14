import express from 'express'
import { AddProduct, getAllProducts, productDetails } from '../../controller/sellers/product.controller.js'
const productRouter = express.Router()

productRouter.post("/add-products" , AddProduct)
productRouter.get("/get-All" , getAllProducts )
productRouter.get("/product-detail/:id" , productDetails)
export default productRouter;