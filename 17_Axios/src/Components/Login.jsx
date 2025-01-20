import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WebAPI from "../WebService/WebAPI";
import WebService from "../WebService/WebService";

function Login()
{
  const[msg,setMsg] = useState('');
  const navigate = useNavigate();

  var email = useRef();
  var password = useRef();
 
  var loginUser =async (event)=>{
   event.preventDefault()

   //Get All values from ref variables
  var em = email.current.value;
  var pass = password.current.value;
  
 //Create Object : 
 var obj = {email:em,password:pass}

 var resp = await WebService.postAPI(WebAPI.loginAPI,obj);
   console.log("Response is : "+resp);
   console.log("String Response is : "+JSON.stringify(resp));
   if(resp.data.status)
    {
      navigate("/home")
    }
    else
    {
      setMsg(resp.data.message);
    }

}
  return<div className="container">
    <h1 className="text-center text-danger">Login Here !</h1>
    <form onSubmit={loginUser}>
        <div className="form-group">
            <label>Enter Email</label>
            <input type="email" className="form-control" placeholder="Enter Email" ref={email}/>
        </div>
        <div className="form-group">
            <label>Enter Password</label>
            <input type="password" className="form-control" placeholder="Enter Password" ref={password}/>
        </div>
        <div className="form-group">
            <input type="submit" className="btn btn-success form-control" value="Login"/>
        </div>
    </form>
   <h1 className="text-danger text-center">{msg}</h1>
  </div>
}
export default Login;