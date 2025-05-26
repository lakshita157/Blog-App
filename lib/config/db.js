import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('MONGODB_CONNECTION_STRING')
    console.log("MongoDB connected");
}
