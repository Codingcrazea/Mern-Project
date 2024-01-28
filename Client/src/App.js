import React from 'react';
import Contact from './contact';
import Login from"./page_componenet/Login";
import SignUp from"./page_componenet/SignUo";
import About from './page_componenet/About';
import Home from './Home';
import { Routes,Route} from 'react-router-dom';
import './App.css';
import Disclaimer from './page_componenet/disclaimer';


function App() {
  return (<>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<SignUp/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/disclaimer' element={<Disclaimer/>}/>
  </Routes>
  
  
  </>);    
}





export default App;
