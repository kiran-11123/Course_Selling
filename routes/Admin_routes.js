import express from 'express'
const Admin_Router = express.Router();




Admin_Router.post("/signin" , (req,res)=>{
     
    try{
        
    }
    catch(er){
         
        return res.status(500).json({
            message:"Error occurred while fetching the Details"
        })
    }
})


Admin_Router.post("/signup" , (req,res)=>{
     
    try{
        
    }
    catch(er){
         
        return res.status(500).json({
            message:"Error occurred while fetching the Details"
        })
    }
})


Admin_Router.post("/create_course" ,(req,res)=>{
       
    try{

    }
    catch(er){
         
        return res.status(500).json({
           message:"Error occureed while Creating the courses"
        })
    }
} )


Admin_Router.post("/update_course" ,(req,res)=>{
       
    try{

    }
    catch(er){
         
        return res.status(500).json({
           message:"Error occureed while Creating the courses"
        })
    }
} )


Admin_Router.get("/allcourses" ,(req,res)=>{
       
    try{

    }
    catch(er){
         
        return res.status(500).json({
           message:"Error occureed while Creating the courses"
        })
    }
} )

























export default Admin_Router;