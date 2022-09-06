import User from "../models/User"
import jwt from 'jsonwebtoken';
import config from '../config'

export const getUser = async(req,res)=>{
   try{
        const users = await User.find();

    res.status(201).json(users)

}  catch(error){
    res.status(404).json({message: `${error}`})
}
}


export const updateUser = async (req,res)=>{
    try{
        const {userID} = req.params
        await User.findByIdAndUpdate(userID, req.body,{
            new:true
        })
        res.status(200).json("Information updated successfully")
    }catch(error){
        res.status(404).json({message: `User not found`})
    }
    
}

export const getUserByEmail = async (req,res)=>{
    try{
        const {email} = req.params
        const {password} = req.query
        
        const user = await User.findOne({email: email})
        if(!user){
            return res.status(400).json({message:'User not found'})
        }

        // const matchPassword = await User.comparePassword(password, user.password)
        
        // if(!matchPassword) return res.status(401).json({message:"Invalid Password"})
        if(user && password !== user.password){
            return res.status(400).json({message:'Invalid Password'})
        }

        res.status(200).json(user)
    }
    catch(error){
        res.status(404).json({message: `${error}`})
    }
}