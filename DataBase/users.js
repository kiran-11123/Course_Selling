import mongoose from "mongoose";


const User_Schema = new mongoose.Schema({

    email:{type:String , required:true},
    firstName:{type:String ,required:true},
    lastName:{type:String ,required:true},
    password:{type:String ,required:true},

},{timestamps:true})

const users_data = mongoose.model("users" , User_Schema);

export default(users_data);