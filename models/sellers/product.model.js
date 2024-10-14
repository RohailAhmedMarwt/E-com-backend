import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    catagory:{
        type:String,
        required:true
    },
    img:{
        type:String
    }
},{timestamps:true})

const Product = mongoose.model("Product" , productSchema)
export default Product;