import '../connection/connection.js'
import categorySchemaModel from '../model/categoryModel.js';
import rs from 'randomstring'
import path from 'path';
import url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export var saveCategory = async (req,res,next)=>{
   
   var catDetails = req.body;
   console.log("Cate Details is : "+catDetails);

   var cat_image = req.files.cat_image;
   console.log("Cate Image is : "+cat_image);

   var catList = await categorySchemaModel.find();
   var len = catList.length;
   console.log("Length is : "+len)

   var _id = len==0 ? 1 : catList[len-1]._id+1;
   console.log("Is is : "+_id);

   var caticonnm = Date.now()+"-"+rs.generate()+"-"+cat_image.name;
   console.log("Cat Name is : "+caticonnm);

   catDetails = {...catDetails,"_id":_id,"cat_image":caticonnm};
   console.log("Details is : "+catDetails);
   
   try
   {
      var cat_details = await categorySchemaModel.create(catDetails);
      console.log("Directory Name : "+__dirname);
      var uploadPath = path.join(__dirname,"../../ui/public/assets/upload/category",caticonnm)
      cat_image.mv(uploadPath);
      res.status(201).json({"status":true,"message":"Category Save With File Upload"});
   }
   catch(err)
   {
      res.status(500).json({"status":false,"message":"file Not Upload or category Details Not Save"});
   }

}

export var viewAllCategoryList =async (req,res,next)=>{

   var condition_obj = url.parse(req.url,true).query;
   var catList = await categorySchemaModel.find(condition_obj);
   var len = catList.length;

   if(len != 0)
      {
          return res.status(201).json({"status":true,catList});
      }
      else{
          return res.status(500).json({"status":false,"error":"Data Not Found"})
      }
}

export var updateCategory = (req,res,next)=>{
    
}

export var deleteCategory = async (req,res,next)=>{

   var condition_obj = req.body;
   console.log("Conditional Object is : "+condition_obj);
   var product_cat = await categorySchemaModel.find(condition_obj);

   if(product_cat.length != 0)
   {
      let result = await categorySchemaModel.deleteMany(condition_obj);
      if(result)
         return res.status(201).json({"status":true,"message":"Category Delete Successfully"});
      else
         return res.status(500).json({"status":false,"message":"Category Not Delete"});
   }
   else
   {
      return res.status(404).json({"status":false,"Error":"Resource Not Found"});
   }
}