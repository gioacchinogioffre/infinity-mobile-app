import { model} from "mongoose";
import mongoose from 'mongoose';

const orderSchema = new  mongoose.Schema({
    number:{
        type: Number,
        required:true
    },
    paymentMethod:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
        
    },  
    total:{
        type: Number,
        required:true
    },
    state:{
        type: String,
        enum: ['paid','unpaid'],
    },

    userID: { type: mongoose.Schema.Types.ObjectId, ref:"User"}
    
},{
    timestamps: false,
    versionKey:false
})

export default model('Order', orderSchema);