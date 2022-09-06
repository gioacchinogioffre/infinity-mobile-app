import { model, Schema } from "mongoose";

const productSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    img:{
        type: String
    },
},{
    timestamps: false,
    versionKey:false
})

export default model('Product', productSchema);