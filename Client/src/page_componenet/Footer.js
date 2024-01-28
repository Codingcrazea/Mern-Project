import React from "react";
import "./page.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="footer">
                <footer>
                <Container>
                    <Row>
                        <Col>
                            <section className="time">
                                <Link to= "/"><h4 className="f_para">Product</h4></Link>
                                <Link to ="/" className ="f_para" ><p><span>Product 1 </span></p></Link> 
                                <Link to ="/" className ="f_para" ><p><span>Product 1 </span></p></Link> 
                                <Link to ="/" className ="f_para" ><p><span>Product 1 </span></p></Link> 
                                <Link to ="/" className ="f_para" ><p><span>Product 1 </span></p></Link> 
                                 
                            </section>
                        </Col>
                        <Col>
                        <section className="time">
                        <Link to= "/"><h4 className="f_para">About</h4></Link>
                                <Link to ="/" className ="f_para" ><p><span>Product 1 </span></p></Link> 
                                <Link to ="/" className ="f_para" ><p><span>Product 1 </span></p></Link> 
                                <Link to ="/" className ="f_para" ><p><span>Product 1 </span></p></Link> 
                                <Link to ="/" className ="f_para" ><p><span>Product 1 </span></p></Link> 
                               </section>
                        </Col>
                        <Col>
                        <section className="time">
                        <Link to= "/"><h4 className="f_para">Pages</h4></Link>
                                <Link to ="/" className ="f_para" ><p><span>Home</span></p></Link>
                                <Link to ="/about" className ="f_para" ><p><span>About</span></p></Link> 
                                <Link to ="/contact" className ="f_para" ><p><span>Contact</span></p></Link> 
                                <Link to ="/disclaimer" className ="f_para" ><p><span>Disclaimer</span></p></Link> 
                                 
                                </section>
                        </Col> 
                    </Row>
                </Container>
                </footer>
            </div>
         <Outlet/>
        </>
    )

}

export default Footer;