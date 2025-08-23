import express from 'express'
const app = express();
app.use(express.json());
import Auth_router from './routes/Auth_routes.js';
import Course_router from './routes/Course_routes.js';
import Admin_Router from './routes/Admin_routes.js';

app.use("api/user" , Auth_router);
app.use("api/course" , Course_router);
app.use("api/admin" , Auth_router);





app.listen(3000,()=>{
    console.log("server is running ")
})