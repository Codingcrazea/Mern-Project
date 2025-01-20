import { useState } from "react";

function Addition()
{
  const [x,setX] = useState(10);
  const [y,setY] = useState(20);
  
  return<>
   <h1 style={{textAlign:'center'}}>Demo Hooks : </h1>
   <b>x : {x}</b>
   <br/>
   <b>y : {y}</b>
   <br/>
   <b>Add : {x+y}</b>
  </>
}
export default Addition