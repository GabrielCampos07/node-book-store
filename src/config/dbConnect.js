import mongoose from "mongoose";

mongoose.connect("mongodb+srv://campos:123@campos.tiu44.mongodb.net/campos-node");

let db = mongoose.connection;

export default db;