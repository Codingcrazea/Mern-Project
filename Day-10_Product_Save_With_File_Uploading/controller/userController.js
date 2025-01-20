import '../connection/connection.js'
import userSchemaModel from '../model/userModel.js';
import sendMail from './emailController.js';
import rs from 'randomstring';
import jwt from 'jsonwebtoken';

export var saveUser = async (req,res,next)=>{
    
    //Get Data From Request Object
    var userDetails = req.body;
    console.log("User Deatils is : "+userDetails);

    //Apply find() method on our collection or fetch all users List
    var userList = await userSchemaModel.find();
    console.log("UserList is :"+userList);

    //Find Length;
    var len = userList.length;
    console.log("Length of UserList is :"+len);

    //Apply Turnary Operator & Assign id Value
   var _id = len == 0 ? 1 : userList[len-1]._id+1; 

   console.log("Id is : "+_id);

   //Create Complete Object Details
   userDetails = {...userDetails,"_id":_id,"role":"user","info":Date()};
   console.log("Complete User Deatils is : "+userDetails)

  //Exception Handling
  try{
    var response = await userSchemaModel.create(userDetails);

    var otp = rs.generate({length:6,charset:'numeric'});
    console.log("OTP : "+otp)

    sendMail(response.email,response.password,otp);


    //Data Save in Session
    req.session.userData = {"otp":otp};


    //console.log("Register Success : "+JSON.stringify(response));
    //res.status(200).json({"status":true,"message":"Register Successfully"})
    res.status(200).json({"status":true,"message":"Register Successfully","otp":otp})

  }catch(err){
   // console.log("Error is : "+err);
   res.status(400).json({"status":false,"message":"Register Failed.."})
  }
    
} 

export var loginUser = async (req,res,next)=>{
  var userDetails = req.body;
  console.log("User Details is : "+userDetails);

  var userList = await userSchemaModel.find(userDetails);
  console.log("User List is : "+userList);

  var len = userList.length;

  if(len>0)
  {
   // console.log("Login Success...");
   // return res.status(201).json({"status":true,"message":"Login Success..","userDetails":userList[0]});
  
    var id  = userList[0]._id;
    var nm = userList[0].name;
    var unm = userList[0].username;
    var em = userList[0].email;
    var role = userList[0].role;

    var user_obj = {"id":id,"name":nm,"username":unm,"email":em,"role":role}; 
  // return res.status(201).json({"status":true,"message":"Login Success..","userDetails":user_obj});
 
  //Token Generate
   var key = rs.generate();
   console.log("Key is : "+key)

  var payload = {"subject":userList[0].email};
  console.log("Payoad is : "+payload);

  var token = jwt.sign(payload,key);
  console.log("Token is : "+token);
  
  return res.status(201).json({"status":true,"message":"Login Success..","token":token,"userDetails":user_obj});
}
  else
  {
    //console.log("Login Failed.....");
    return res.status(201).json({"status":false,"message":"Login Failed..","error":"Invalid Email or password"});
  }
}

export var updateUser = (req,res,next)=>{
    
}

export var deleteUser = (req,res,next)=>{
    
}

export var fetchAllUserList = (req,res,next)=>{
    
}