import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useState ,useEffect,useNavigate} from 'react';
import Header from "./page_componenet/navbar";
import Middle from "./page_componenet/Middle";
import Footer from "./page_componenet/Footer";
function Home(){
    
    

    // useEffect(()=>{
    //     fetch('http://localhost:5000/api')
    //     .then((res)=>res.json())
    //     .then((message) =>setData(message.data));

    // },[]);

    // const navigate = useNavigate();
    //   function handle(){
    // navigate("/contact");
    // }

    
    
    // useEffect(()=>{
    //     fetch('https://localhost:5000/api')
    //     .then()
    //     .then(data => alert(data))
    //     .catch(err => console.log(err));
    // });
    return(<>
    
    
    <Header/>
    <Middle/>  
    <Footer/>      
    </>)
}
export default Home;