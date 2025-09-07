import express from 'express'
const Course_router  = express.Router();
import Course from "../DataBase/course.js" 

Course_router.get("/allcourses" , async(req,res)=>{
     
    try{

        const  data = await Course.find();

        if(data.length===0){
            return res.status(200).json({
                message:"No Courses Avalilable",
                CourseData :[]
            })
        }

        return res.status(200).json({
            message:"Data Fetched Successfully",
            CourseData : data
        })



    }
    catch(er){
         
        return res.status(500).json({
           message:"Error occureed while Creating the courses"
        })
    }
})

Course_router.get("/purchasedcourses" , (req,res)=>{
     
    try{

         
        
    }
    catch(er){
         
        return res.status(500).json({
            message:"Error occurred while fetching the Details"
        })
    }
})


Course_router.post("/coursepurchase" , (req,res)=>{
     
    try{
        
    }
    catch(er){
         
        return res.status(500).json({
            message:"Error occurred while fetching the Details"
        })
    }
})

export default Course_router;