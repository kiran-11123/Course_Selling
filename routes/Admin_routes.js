import express from 'express'
const Admin_Router = express.Router();
import Admin from '../DataBase/Admin.js'
import users_data from '../DataBase/users.js';
import Authenticate_Token from '../middlewares/JWT_Authentication.js';
import Course from '../DataBase/course.js';


Admin_Router.post("/signin" , Authenticate_Token , async(req,res)=>{
     
     try{
    
            const {email , firstName , lastName , password} = req.body;
    
            const user_check = await users_data.find({email});
            
            if(!user_check){
                 return res.status(404).json({
                    message:"Email Not found"
                 })
            }
    
            const password_check = await bcrypt.compare(password , user_check.password);
    
            if(!password_check) {
                return res.status(400).json({
                    message:"Password is Wrong !! Try again"
                })
            }
    
            const token_details = {user_id : user_check._id ,user_email :user_check.email , user_firstName:user_check.firstName ,user_lastName:user_check.lastName}
            
            const token = jwt.sign(token_details ,process.env.SECRET_KEY,{expiresIn:"1h"})
            
    
            return res.status(200).json({
                message:"Signin Successfull !!",
                token:token
            })
    
            
        }
        catch(er){
             
            return res.status(500).json({
                message:"Error occurred while fetching the Details"
            })
        }
})


Admin_Router.post("/signup" ,async(req,res)=>{
     
     try{
    
            const {email , firstName , lastName , password } =req.body;
    
            const email_check = await users_data.find({email});
    
            if(email){
                return res.status(400).json({
                    message:"Email Already Registered !! SignIn"
                })
            }
    
            const hashedPassword  =await bcrypt.hash(password ,10);
    
            const newUser = await new users_data({
                email:email,
                firstName:firstName,
                lastName:lastName,
                password:hashedPassword,
                
            })
    
            newUser.save();
    
            return res.status(200).json({
                message:"User Registered Successfully !"
            })
            
        }
        catch(er){
             
            return res.status(500).json({
                message:"Error occurred while fetching the Details"
            })
        }
})


Admin_Router.post("/create_course" ,async (req,res)=>{
       
    try{

        const Admin_id = req.user.user_id;

        const {course_title , course_description , price , course_image} = req.body;
        
        const new_course = new Course({
               
            course_title:course_title,
            course_description:course_description,
            price  : parseInt(price),
            creator_id : Admin_id

        })

        await new_course.save();
        
        return res.status(200).json({

           message:"Course Created and post Succcessfully",


        })

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


Admin_Router.get("/allcourses" ,async(req,res)=>{
       
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
} )














export default Admin_Router;