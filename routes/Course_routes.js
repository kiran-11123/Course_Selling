import express from 'express'
const Course_router  = express.Router();
import Course from "../DataBase/course.js" 

Course_router.get("/allcourses" , (req,res)=>{
     
    try{
        
    }
    catch(er){
         
        return res.status(500).json({
            message:"Error occurred while fetching the Details"
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