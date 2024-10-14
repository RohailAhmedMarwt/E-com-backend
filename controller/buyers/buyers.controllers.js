import { buyer } from "../../models/buyers/buyers.model.js";
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'


export const registerBuyer = async (req , res)=>{
    try {
        const {name , address , email , password , cellNumber} = req.body;

        const saltingRounds = 10 ;
        const hashedPassword = await bcrypt.hash(password , saltingRounds)

        const newBuyer = new buyer({name, address, email, password:hashedPassword , cellNumber}) 
        await newBuyer.save();
    
        return res.status(200).json(newBuyer)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const loginBuyer = async (req , res) =>{
    try {
        const {email , password} = req.body

        const user = await buyer.findOne({email})

        if(!user){
            return res.status(400).json("invalid email")
        }
        if(user.password !== password){
            return res.status(400).json("invalid password")
        }

        const token = jwt.sign({id : user._id , email : user.email}, process.env.SCREAT_KEY ,{expiresIn:"1h"})

        return res.status(200).json({token})
    } catch (error) {
        return res.status(500).json(error)
    }
}