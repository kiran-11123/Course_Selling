import mongoose  from "mongoose";

const Admin_Schema = new mongoose.Schema({
     
     email:{type:String , required:true},
    firstName:{type:String ,required:true},
    lastName:{type:String ,required:true},
    password:{type:String ,required:true},

},{timestamps:true})

const Admin = mongoose.model("Admin" , Admin_Schema);

export default Admin;