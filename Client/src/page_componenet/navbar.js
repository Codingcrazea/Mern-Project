import React from "react";
import "./page.css";
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from "./navigation";
import { Navbar, Nav, Container, NavDropdown ,Carousel,Button} from 'react-bootstrap';
import  FirstImage  from "./images/new_bannerbg.png";

import { Outlet, Link } from "react-router-dom";
function Navbar_pannel() {
   return (
      <>
         <Navigation/>
    <div className="carousal_h">
    <Carousel>
      <Carousel.Item>
        <img className="first_slide" 
        src={FirstImage}
        alt="first_slide"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="first_slide" 
        src={FirstImage}
        alt="first_slide"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="first_slide" 
        src={FirstImage}
        alt="first_slide"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

         

      </>
   )
}

export default Navbar_pannel;