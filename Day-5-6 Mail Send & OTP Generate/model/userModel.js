import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator'
var userSchema = mongoose.Schema({
    _id:Number,
    name:{
        type:String,
        required:[true,"Name is Required"],
        lowercase:true,
        trim:true
    },
    username:{
        type : String,
        required: [true,"Username is Required"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    email:{
        type : String,
        required: [true,"Email is Required"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password:{
        type: String,
        required: [true,"Password is Required"],
        maxlength:10,
        minlength:5,
        trim: true,
    },
    mobile:{
        type: String,
        required:[true,"Mobile is Required"],
        maxlength:10,
        minlength:10,
        unique:true,
        trim: true,
    },
    gender: {
        type: String,
        required: [true,"Gender is required"],
      },
    role:String,
    info:String
})

//apply to uniqueValidator plugin to user Schema
userSchema.plugin(uniqueValidator);

//compile schema to model
const userSchemaModel = mongoose.model('user_collection',userSchema);
export default userSchemaModel;