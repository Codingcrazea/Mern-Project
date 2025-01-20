import mongoose from "mongoose";
const url = "mongodb://127.0.0.1:27017/e_shop";
mongoose.connect(url);
console.log("Connection Successfully.....");