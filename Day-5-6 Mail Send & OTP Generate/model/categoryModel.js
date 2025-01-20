import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator'
var categorySchema = mongoose.Schema({
    _id:Number,
    cat_name:{
        type:String,
        required:[true,"Category Name is Required"],
        lowercase:true,
        unique:true,
        trim:true
    },
    cat_image:{
        type:String,
        required:[true,"Category Icon por Image is Required"],
    } 
})

//apply to uniqueValidator plugin to user Schema
categorySchema.plugin(uniqueValidator);

//compile schema to model
const categorySchemaModel = mongoose.model('category_collection',categorySchema);
export default categorySchemaModel;