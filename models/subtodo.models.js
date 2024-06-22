import mongoose from "mongoose";
const subtodoSchema = mongoose.Schema({
    content:String,
    complete:{
        type: Boolean,
        default:false
    },
    
},{timestamps:true})