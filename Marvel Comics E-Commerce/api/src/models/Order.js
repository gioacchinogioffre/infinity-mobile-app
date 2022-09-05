import { model} from "mongoose";
import mongoose from 'mongoose';

const orderSchema = new  mongoose.Schema({
    number:{
        type: Number,
        require:true
    },
    paymentMethod:{
        type: String,
        require:true
    },
    date:{
        type: Date,
        default: Date.now
        
    },  
    total:{
        type: Number,
        require:true
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