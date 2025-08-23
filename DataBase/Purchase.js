import mongoose, { mongo }  from "mongoose";
import Course_Schema from "./course";

const Purchase_Schema = new mongoose.Schema({
     
    courseId : {type:mongoose.Types.ObjectId,ref:"Courses",required:true},
    userId :{type:mongoose.Types.ObjectId , ref:"users" , required:true},
},{timestamps:true})


const Course_purchase = mongoose.model("Course_purchase" , Purchase_Schema);

export default Course_purchase;