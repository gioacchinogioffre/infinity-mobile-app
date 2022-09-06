import { model, Schema } from "mongoose";
import mongoose from 'mongoose';

const comicSchema = new  mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },  
    pageCount:{
        type: Number
    },
    rating:{
        type: Number,
        default: 3
    },
    image:{
        type:String
    },
    language:{
        type: String
    },
    numReviews:{
        type: Number,
        default: 0
    },
    stock:{
        type: Number,
        default: 0
    },
    reviews:[{type: mongoose.Schema.Types.ObjectId,ref:"Review",}]
},{
    timestamps: false,
    versionKey:false
})

export default model('Comic', comicSchema);