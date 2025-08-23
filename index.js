import express from 'express'
const app = express();
app.use(express.json());
import Auth_router from './routes/Auth_routes.js';
import Course_router from './routes/Course_routes.js';


app.use("/user/signin" , Auth_router);
app.use("/user/course" , Course_router)





app.listen(3000,()=>{
    console.log("server is running ")
})