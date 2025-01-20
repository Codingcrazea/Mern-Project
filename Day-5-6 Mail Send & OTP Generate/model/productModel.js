import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const productSchema = mongoose.Schema({

    _id :Number,
    product_name:{
        type:String,
        lowercase:true,
        required:[true,"Product Name is required"],
        trim:true,
    },
    cat_name:{
        type:String,
        lowercase:true,
        required:[true,"Category is required"],
        unique:true,
        trim:true,
    },
    description:{
        type:String,
        lowercase:true,
        required:[true,"Description is required"],
        trim:true,
    },
    product_brand:{
        type:String,
        lowercase:true,
        required:[true,"Brand is required"],
        trim:true, 
    },
    product_image:{
        type:String,
        required:[true,"Product Icon or Image is required"],
        trim:true,
    },
    product_price:{
        type:Number,
        required:[true,"Price is required"],
    },
    product_discount:{
        type:Number,
        required:[true,"Discount Price or percentage is required"],
    },
    uid:String,
    info:String
});
productSchema.plugin(uniqueValidator);


const productSchemaModel = mongoose.model('product_collection',productSchema);
export default productSchemaModel;