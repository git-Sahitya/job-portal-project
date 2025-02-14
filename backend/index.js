import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv'
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";

dotenv.config({})

const app = express();

//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: ["http://localhost:5121"],
  credentials: true,
};

app.use(cors(corsOptions));
const PORT = process.env.PORT || 5001;

//APIs 
app.use("/api/user", userRoute)


app.listen(PORT, () => {
  connectDB()
  console.log(`Server is running on port ${PORT}`);
});
