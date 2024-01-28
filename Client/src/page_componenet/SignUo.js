import React from "react";
import "./page.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import Navigation from "./navigation";
import Axios from "axios";

function SignUo() {
    const [validated, setValidated] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (<>
        <Navigation/>
        <div className="form">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-2">
                    <Form.Group as={Col} md="5" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"

                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <br/>
                    <Form.Group as={Col} md="5" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"

                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group> 
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
                            <Form.Control
                                type="email"
                                placeholder="email"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please use a valid email
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Password</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
                            <Form.Control
                                type="password"
                                placeholder="password"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a strong password.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    
                </Row>
                <Button className="mx-5" type="submit">Submit form</Button>
                    <Link className="mx-5" to="">Forget Password</Link>
                    <Link className="mx-5" to="/login">Already have account</Link>
            </Form>
        </div>
        <Outlet />





    </>)

}
export default SignUo;