import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true,
        lowercase:true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        lowercase:true        
    },
    password: {
        type: Number,
        required: true
    },
    dob: {
        type:Date,
        required: true
    }
},{timestamps:true});

export const User = mongoose.model("User",UserSchema)