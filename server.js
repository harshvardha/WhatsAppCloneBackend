import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/dbConnect.js";
import router from "./routes/route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors({
    origin: "*"
}));
app.use(express.json());

app.use("/user", router);

mongoose.connection.once('open', () => {
    console.log("MONGO DB CONNECTED.");
    app.listen(PORT, () => {
        console.log(`Server running on port: 5000`)
    });
});