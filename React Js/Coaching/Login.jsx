event.preventDefault()  // Used to prevent default opearation on form submitted that 
// when form submitted 

// message is recieved from api is a key inside object 



import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login()
{
  const[msg,setMsg] = useState('');
  const navigate = useNavigate(); // Use naviagate to redirect user but naviagtion paths must be set before 

  var email = useRef();
  var password = useRef();
 
  var loginUser = (event)=>{
   event.preventDefault()  // Evene

   //Get All values from ref variables
  var em = email.current.value;
  var pass = password.current.value;
  
 //Create Object : 
 var obj = {email:em,password:pass}  // Object mein wo hi value hogi jo json object ki key ho


   // Instead we can also use axios refer code from study folder axios app 
   // just use async with loginUser function and use await before requesting through axios

 fetch("http://tutorials.codebetter.in:7084/auth/login",{
    method:'POST',
    headers:{
        'Content-Type' : 'application/json'
    },
    body:JSON.stringify(obj)
 }).then(res=>res.json()).then((result)=>{
    console.log("Result is : "+result);
    console.log("String : "+JSON.stringify(result))

    // Check is status is true i.e. login id and password matched 
    if(result.status)
    {
       setMsg(result.message);
       navigate("/home"); // navigate to home
    }
    else
    {
        setMsg(result.message);
    }
 }).catch((err)=>{
   console.log("Error is : "+err)
 })
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