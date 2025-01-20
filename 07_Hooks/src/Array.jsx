import { useState } from "react";

function Array()
{
  const [arr,setArr] = useState([10,20,30,40,50,60,70,80,90,100]);
  
  return<>
   <h1 style={{textAlign:'center'}}>Demo Hooks : </h1>
   {arr.map((ar)=>{
    return<b>{ar} &nbsp;</b>
   })}
  </>
}
export default Array