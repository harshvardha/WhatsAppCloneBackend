import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = () => {
    try {
        connect(process.env.DATABASE_URI);
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;