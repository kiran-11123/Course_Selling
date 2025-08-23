import mongoose from "mongoose";


const Course_Schema = new mongoose.Schema({

     course_title :{type:String,required:true},
     course_description :{type:String ,required:true},
     price :{type:Number},
     course_image :{type:String},
     creator_id :{type:mongoose.Types.ObjectId , ref:'Admin' , required:true}
    
},{timestamps:true})


const Course = mongoose.model("Courses",Course_Schema);
export default Course_Schema;