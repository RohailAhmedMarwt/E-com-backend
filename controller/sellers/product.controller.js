import Product from "../../models/sellers/product.model.js";

export const AddProduct = async (req , res) =>{
    try {
        const {title , catagory , price , description , img } = req.body
        const product = new Product({title , catagory , price , description , img});

        await product.save();
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json(error)
    }
}

 export const getAllProducts = async(req,res) =>{
    try {
        const products = await Product.find()
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json(error)
    }
}


export const productDetails = async (req, res) =>{
    try {
        const {id} = req.params ;
        const product = await Product.findById(id);

        if(!product){
            return res.status(400).json("Product not Found")
        }
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json(error)
    }
}