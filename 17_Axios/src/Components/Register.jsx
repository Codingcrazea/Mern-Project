import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WebService from "../WebService/WebService";
import WebAPI from "../WebService/WebAPI";

function Register()
{
  const[msg,setMsg] = useState('');
  const navigate = useNavigate();

  var name = useRef();
  var email = useRef();
  var password = useRef();
  var mobile = useRef();
  var gender = useRef();

  var saveUser = async (event)=>{
   event.preventDefault()

   //Get All values from ref variables
  var nm = name.current.value;
  var em = email.current.value;
  var pass = password.current.value;
  var mob = mobile.current.value;
  var gen = gender.current.value;

  //Create Object : 
  var obj = {name: nm,phone:mob,email:em,password:pass,gender:gen}

   var resp = await WebService.postAPI(WebAPI.registerAPI,obj);
   console.log("Response is : "+resp);
   console.log("String Response is : "+JSON.stringify(resp));

   if(resp.data.status)
   {
     navigate("/login")
   }
   else
   {
     setMsg(resp.data.message);
   }
 
}
  return<div className="container">
    <h1 className="text-center text-danger">Register Here !</h1>
    <form onSubmit={saveUser}>
        <div className="form-group">
            <label>Enter Name</label>
            <input type="text" className="form-control" placeholder="Enter Name" ref={name}/>
        </div>
        <div className="form-group">
            <label>Enter Email</label>
            <input type="email" className="form-control" placeholder="Enter Email" ref={email}/>
        </div>
        <div className="form-group">
            <label>Enter Password</label>
            <input type="password" className="form-control" placeholder="Enter Password" ref={password}/>
        </div>
        <div className="form-group">
            <label>Enter Contact</label>
            <input type="number" className="form-control" placeholder="Enter Contact" ref={mobile}/>
        </div>
        <div className="form-group">
            <label>Select Gender</label>
            <select className="form-control" ref={gender}>
                <option value=''>Select Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </select>
        </div>
        <div className="form-group">
            <input type="submit" className="btn btn-success form-control" value="Register"/>
        </div>
    </form>
    <span>If you Have Not Register <Link to="/login">Click Here !</Link> </span>
   <h1 className="text-danger text-center">{msg}</h1>
  </div>
}
export default Register;