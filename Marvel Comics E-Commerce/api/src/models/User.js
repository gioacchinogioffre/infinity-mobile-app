import {Schema, model} from 'mongoose';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique: true,
        required:true
    },
    email:{
        type:String,
        unique: true,
        required:true
    },
    password:{
        type:String,
        required: true    
    },
    city:{
        type:String,
    },
    country:{
        type:String
    },
    address:{
        type:String
    },
    postalCode:{
        type:String
    },
    //relacion de 1:n (uno a muchos)
    roles:[{type: mongoose.Schema.Types.ObjectId,  ref:"Role",}],

    reviews:[{type: mongoose.Schema.Types.ObjectId, ref:"Review",}],

    orders:[{type: mongoose.Schema.Types.ObjectId, ref:"Order",}]
},{
    timestamps:false,
    versionKey:false
})

userSchema.statics.encryptPassword = async (password)=>{
    const salt  = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}
userSchema.statics.comparePassword = async(password, recivedPassword)=>{
    return await bcrypt.compare(password,recivedPassword)
}

export default model("User", userSchema); 