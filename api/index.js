import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"

dotenv.config();
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("connected to db");
    })
    .catch((error)=> {
        console.log(error)
    })

const app = express();

app.use(express.json());

app.listen(3000, (req, res) => {
    console.log("server is running on port 3000!!")
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);