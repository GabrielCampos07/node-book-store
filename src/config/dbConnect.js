import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION_STRING);

let db = mongoose.connection;

export default db;