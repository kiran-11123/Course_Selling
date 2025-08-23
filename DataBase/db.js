import mongoose  from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const ConnectDB = async ()=>{

    try{

         await mongoose.connect(process.env.Mongo_URL,{
            useNewUrlParser: true,
           useUnifiedTopology: true,
         });
         console.log("MongoDB connected");



    }
    catch(er){
        console.log("MongoDB connection issue ");
        process.exit(1);
    }

   

}

export default ConnectDB;