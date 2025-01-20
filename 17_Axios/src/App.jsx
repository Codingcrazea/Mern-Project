import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";


function App()
{
  return<div className="container">
   <Routes>
     <Route path="/" element={<Register/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/home" element={<Home/>}></Route>
   </Routes>

  </div>
}
export default App;