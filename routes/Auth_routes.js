import express from 'express'
const Auth_router=  express.Router();

Auth_router.post("/signin" , (req,res)=>{
     
    try{
        
    }
    catch(er){
         
        return res.status(500).json({
            message:"Error occurred while fetching the Details"
        })
    }
})


Auth_router.post("/signup" , (req,res)=>{
     
    try{
        
    }
    catch(er){
         
        return res.status(500).json({
            message:"Error occurred while fetching the Details"
        })
    }
})










export default Auth_router;