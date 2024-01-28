import React from "react";
import "./page.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { useState ,useEffect} from 'react';
import { Link , Outlet } from "react-router-dom";
import axios from 'axios';
import Navigation from "./navigation";
function MyForm() {

    const [validated, setValidated] = useState('');
    const [data , setData] =useState('');
    

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        
        
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
        <Navigation/>
        
        <div className="form">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Label className="f_input">Email/username</Form.Label>
                <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                />
                <br />
                <Form.Control className="f_input"
                    required
                    type="text"
                    placeholder="Password"

                />
                <Form.Control.Feedback type="invalid">
                                Please use a valid email
                            </Form.Control.Feedback>
                <Button className="mx-3" type="submit">Submit form</Button> 
                <Link className ="mx-5"to="">Forget Password</Link>
                <Link className="mx-5" to="/register">Not Registered yet</Link>
            </Form>
        </div>
        
        <Outlet/>
        </>);


}
export default MyForm;  