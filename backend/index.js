import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv'
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from  "./routes/company.route.js";
import jobRouter from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"
import path from "path"

dotenv.config({})

const app = express();

//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: ["https://job-portal-project-4q3o.onrender.com"],
  credentials: true,
};

app.use(cors(corsOptions));
const PORT = process.env.PORT || 5001;

//APIs 
app.use("/api/user", userRoute)
app.use("/api/company", companyRoute)
app.use("/api/job", jobRouter)
app.use("/api/application", applicationRoute)


// Code for deployment

if(process.env.NODE_ENV === "production"){
  const dirpath = path.resolve()
  app.use(express.static("./frontend/dist"))
  
  app.get('*' , (req,res)=>{
    res.sendFile(path.resolve(dirpath, "./frontend/dist" , "index.html"))
  })
}


app.listen(PORT, () => {
  connectDB()
  console.log(`Server is running on port ${PORT}`);
});
