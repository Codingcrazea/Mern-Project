import { useState } from "react";

function App()
{
  const [name,setName] = useState("Mahi");
  var changeName = ()=>{
    setName("Chintu");
  }
  return<>
   <h1 style={{textAlign:'center'}}>Demo Hooks : </h1>
   <b>{name}</b>
   &nbsp;&nbsp;
   <button onClick={changeName}>Change Name</button>
  </>
}
export default App