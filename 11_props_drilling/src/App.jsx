import { useState } from "react";

function App()
{
  const [name,setName] = useState("Chiki");
  return<div>
    <h1>App Component Called : {name}</h1>
    <hr/>
    <Show nm={name}/>
  </div>
}
export default App;

function Show(props)
{
  return<div>
  <h1>Show Component Called : {props.nm}</h1>
  <button onClick={()=>setName("Piki")}>Change Data</button>
  <hr/>
  <Wish unm = {props.nm}/>
</div>
}

function Wish(props)
{
  return<div>
  <h1>Wish Component Called </h1>
  <Display uname ={props.unm}/>
</div>
}

function Display(props)
{
  return<div>
  <h1>Display Component Called </h1>
  <Demo unme = {props.uname}/>
</div>
}

function Demo(props)
{
  return<div>
  <h1>Demo Component Called : {props.unme}</h1>
</div>
}