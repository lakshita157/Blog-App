import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.273idgj.mongodb.net/blog-app')
    console.log("MongoDB connected");
}