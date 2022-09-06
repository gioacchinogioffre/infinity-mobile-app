import User from "../models/User"

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

export const getUserByID = async (req,res)=>{
    try{
        const {UserID} = req.params
        const user = await User.findById(UserID)
        if(!user){
            res.status(400).json({message:'user not found'})
        }
        res.status(200).json(user)
    }
    catch(error){
        res.status(404).json({message: `${error}`})
    }
}