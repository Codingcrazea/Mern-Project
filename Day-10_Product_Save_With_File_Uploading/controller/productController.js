import '../connection/connection.js'
import productSchemaModel from '../model/productModel.js';
import rs from 'randomstring'
import url from 'url';
import path from 'path';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export var saveProduct = async (req,res,next)=>{
   
    var product_details = req.body;
    console.log("Product_details : "+product_details);

    var product_icon = req.files.product_image;

    var product_list = await productSchemaModel.find();

    var len = product_list.length;

    var _id = len == 0 ?1 :product_list[len-1]._id+1;

    var product_icon_name = Date.now()+"-"+rs.generate()+"-"+product_icon.name;

    product_details = {...product_details,"_id":_id,"product_image":product_icon_name,"info":Date()};
    try{
        var product_resp = await productSchemaModel.create(product_details);

        var uploadpath =path.join(__dirname,"../../ui/public/assets/upload/product",product_icon_name);

        product_icon.mv(uploadpath);

        res.status(201).json({"status":true,"message":"Product Details Saved..."});
    }
    catch(error)
    {
        res.status(500).json({"status":false,"message":"Product Details Not Save"});
    }

}

export var viewAllProductList =async (req,res,next)=>{
    
    var condition_obj = url.parse(req.url,true).query;
    var product_list = await productSchemaModel.find(condition_obj);
    var len = product_list.length;
    if(len != 0)
    {
       return res.status(201).json({"status":true,product_list:product_list});
   }
   else
   {
      return res.status(500).json({"status":false,"error":"Data Not Found"})
   }
}

export var updateProduct = (req,res,next)=>{
    
}

export var deleteProduct = (req,res,next)=>{
    
}