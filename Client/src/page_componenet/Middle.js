import React from "react";
import "./page.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col,Image } from 'react-bootstrap';
import Fcol from './images/img-3.png';
import Fcol2 from './images/img-4.png';
import Fcol3 from './images/img-5.png';
import { Link, Outlet } from 'react-router-dom';

function Middle() {
    return (
        <>
            <h1 className="m_ht">Product Sell</h1><br /><br />
            <div className="middle_c">
                <Container>
                    <Row>
                        <Col>
                            <div className="col_1">
                                <div className="img-wrap" itemprop="image"><a href="#">
                                    <Image className="col_image" src={Fcol} alt="courses picture" fluid />
                                    </a>
                                </div>
                                <Link to="" class="learn-desining-banner" itemprop="name">Learn Web Designing</Link>
                                <div className="box-body" itemprop="description">
                                    <p>some words</p>
                                    <section className="time">
                                        <p><span>Duration:</span> 4 Years</p>
                                        <p><span>Class Time:</span> session</p>
                                        <p><span>Fee:</span> as per cources</p>
                                    </section>
                                </div>
                            </div>

                        </Col>
                        <Col>
                            <div className="col_1">
                                <div className="img-wrap" itemprop="image"><a href="#">
                                    <img className="col_image" src={Fcol2} alt="courses picture" /></a>
                                </div>
                                <Link to="/contact" class="learn-desining-banner" itemprop="name">Learn Web Designing</Link>
                                <div className="box-body" itemprop="description">
                                    <p>some words</p>
                                    <section className="time">
                                        <p><span>Duration:</span> 4 Years</p>
                                        <p><span>Class Time:</span> session</p>
                                        <p><span>Fee:</span> as per cources</p>
                                    </section>
                                </div>
                            </div>


                        </Col>
                        <Col>
                            <div className="col_1">
                                <div className="img-wrap" itemprop="image">
                                    < img className="col_image" src={Fcol3} alt="courses picture" />
                                </div>
                                <Link to="" class="learn-desining-banner" itemprop="name">Learn Web Designing</Link>
                                <div className="box-body" itemprop="description">
                                    <p>some words</p>
                                    <section className="time">
                                        <p><span>Duration:</span> 4 Years</p>
                                        <p><span>Class Time:</span> session</p>
                                        <p><span>Fee:</span> as per cources</p>
                                    </section>
                                </div>
                            </div>


                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="col_1">
                                <div className="img-wrap" itemprop="image"><a href="#">
                                    <Image className="col_image" src={Fcol} alt="courses picture" fluid />
                                    </a>
                                </div>
                                <Link to="" class="learn-desining-banner" itemprop="name">Learn Web Designing</Link>
                                <div className="box-body" itemprop="description">
                                    <p>some words</p>
                                    <section className="time">
                                        <p><span>Duration:</span> 4 Years</p>
                                        <p><span>Class Time:</span> session</p>
                                        <p><span>Fee:</span> as per cources</p>
                                    </section>
                                </div>
                            </div>

                        </Col>
                        <Col>
                            <div className="col_1">
                                <div className="img-wrap" itemprop="image"><a href="#">
                                    <img className="col_image" src={Fcol2} alt="courses picture" /></a>
                                </div>
                                <Link to="/contact" class="learn-desining-banner" itemprop="name">Learn Web Designing</Link>
                                <div className="box-body" itemprop="description">
                                    <p>some words</p>
                                    <section className="time">
                                        <p><span>Duration:</span> 4 Years</p>
                                        <p><span>Class Time:</span> session</p>
                                        <p><span>Fee:</span> as per cources</p>
                                    </section>
                                </div>
                            </div>


                        </Col>
                        <Col>
                            <div className="col_1">
                                <div className="img-wrap" itemprop="image">
                                    < img className="col_image" src={Fcol3} alt="courses picture" />
                                </div>
                                <Link to="" class="learn-desining-banner" itemprop="name">Learn Web Designing</Link>
                                <div className="box-body" itemprop="description">
                                    <p>some words</p>
                                    <section className="time">
                                        <p><span>Duration:</span> 4 Years</p>
                                        <p><span>Class Time:</span> session</p>
                                        <p><span>Fee:</span> as per cources</p>
                                    </section>
                                </div>
                            </div>


                        </Col>
                    </Row>
                
                    <Row>
                        <Col>
                            <div className="col_1">
                                <div className="img-wrap" itemprop="image"><a href="#">
                                    <Image className="col_image" src={Fcol} alt="courses picture" fluid />
                                    </a>
                                </div>
                                <Link to="" class="learn-desining-banner" itemprop="name">Learn Web Designing</Link>
                                <div className="box-body" itemprop="description">
                                    <p>some words</p>
                                    <section className="time">
                                        <p><span>Duration:</span> 4 Years</p>
                                        <p><span>Class Time:</span> session</p>
                                        <p><span>Fee:</span> as per cources</p>
                                    </section>
                                </div>
                            </div>

                        </Col>
                        <Col>
                            <div className="col_1">
                                <div className="img-wrap" itemprop="image"><a href="#">
                                    <img className="col_image" src={Fcol2} alt="courses picture" /></a>
                                </div>
                                <Link to="/contact" class="learn-desining-banner" itemprop="name">Learn Web Designing</Link>
                                <div className="box-body" itemprop="description">
                                    <p>some words</p>
                                    <section className="time">
                                        <p><span>Duration:</span> 4 Years</p>
                                        <p><span>Class Time:</span> session</p>
                                        <p><span>Fee:</span> as per cources</p>
                                    </section>
                                </div>
                            </div>


                        </Col>
                        <Col>
                            <div className="col_1">
                                <div className="img-wrap" itemprop="image">
                                    < img className="col_image" src={Fcol3} alt="courses picture" />
                                </div>
                                <Link to="" class="learn-desining-banner" itemprop="name">Learn Web Designing</Link>
                                <div className="box-body" itemprop="description">
                                    <p>some words</p>
                                    <section className="time">
                                        <p><span>Duration:</span> 4 Years</p>
                                        <p><span>Class Time:</span> session</p>
                                        <p><span>Fee:</span> as per cources</p>
                                    </section>
                                </div>
                            </div>


                        </Col>
                    </Row>
                
                </Container>
            </div>
            <Outlet />
        </>
    )
}

export default Middle;