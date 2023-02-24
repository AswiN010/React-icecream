import React from 'react'
import { useState } from 'react';
import employee from './Product';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import './store.css'
function Store() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='f'>

            <img style={{ width: "100%" }} src='./don1.jpg' />
            <img style={{ width: "100%" }} src='./nuevas-olas.png' />
            <p className='text-center' style={{fontSize:"70px",color:"black",fontFamily:"papyrus"}}>CaKe World</p>
                   
                   <Container style={{ backgroundImage:"https://woodlands-ice-cream.co.uk/wp-content/themes/woodlands/img/wooden_panels.jpg", border: "10px transparent solid" }}>
                                           <Row>
                                               <Col  sm={4}>
                                               <img style={{ width:"50%",height:"400px",marginLeft:"10%", borderRadius:"40px" }} src='https://woodlands-ice-cream.co.uk/wp-content/themes/woodlands/img/250years-footer.svg' />
                   
                                                  
                                               </Col>
                                               <Col sm={8}>
                                            
                                                   <p className='text-center' style={{ fontSize:"70px",color: "black", fontFamily: "MV Boli", marginTop: "20px" ,fontStyle:"uppercase"}}>
                   
                                                   We Celebrating 25 years</p>
                   
                   <p className='sst text-center'
                       style={{ fontSize: "20px", color: "black"}}>
the Exclusive edition of cakes are being introduced as a celebration of our 25 years in this world of ice cream.Just like so many small dairy farmers in the 1990s, we found it increasingly difficult to make a living from just dairy production and began to explore new ways to supplement our income through diversification and expansion. Our farm had successfully been producing quality organic milk for many years, Thank you all for this support & welcomr to the world of cakes  </p>                                       </Col>
                                           </Row>
                                       </Container>
                   
                   
            {

                employee.map(item => (
                    <div>
                        <Link style={{ textDecoration: "none" }} >

                            <Container >
                                <Row className='e' style={{ marginBottom: "30px" }} >
                                    <Col sm={6}>
                                        <img style={{ width: "90%", height: "90%", borderRadius: "40px", marginTop: "20px" }} src={item.photograph} />


                                    </Col>
                                    <Col className='  text-center' style={{ marginLeft: "-10px" }} sm={6}>

                                        <p className='won' style={{ fontSize: "60px", color: "black",  marginTop: "20px", fontStyle: "uppercase" }}>

                                            {item.uname}</p>
                                        <p className='ho2'
                                            style={{ fontSize: "20px", color: "black" }}>
                                            {item.detail}            </p>
                                        <p className='ho3'
                                            style={{ fontSize: "20px", color: "black" }}>
                                            {item.address}            </p>
                                        <h1 style={{ fontSize: "20px", color: "black", fontFamily: "cursive" }}>Rs. <span style={{ fontFamily: "Bodoni MT", fontSize: "70px" }}>{item.price}</span></h1>



                                        <Button style={{borderRadius:"200px",width:"1px", backgroundColor: "transparent",marginLeft:"-280px",border:"2px white solid",textDecorationStyle:"none" }}  onClick={handleShow}>
                                        <span className='span1'><a ></a></span>
                                        </Button>

                                        <Modal style={{ color: "black" }} show={show} onHide={handleClose}>
                                            <Modal.Header style={{backgroundColor:"white",border:"4px green solid"}} closeButton>
                                                <Modal.Title style={{fontSize:"40px",fontfamily:"cursive"}}>DasherCranK</Modal.Title>
                                            </Modal.Header >
                                            <Modal.Body style={{backgroundColor:"white"}}>
                                                <span style={{fontSize:"30px"}}>Order Details</span>
                                                <br></br>
                                            Exclusive Limited edition cakes are less stocks when the stock Updates we will contact you
                                            <br></br>
                                           <input style={{color:"black",border:"2px black solid",backgroundColor:"white",width:"80%",borderRadius:"10px",marginBottom:"15px",padding:"5px"}} placeholder='Enter your name'></input>

                                           <br></br>
                                           <input style={{color:"black",border:"2px black solid",backgroundColor:"white",width:"80%",borderRadius:"10px",padding:"5px"}} placeholder='Enter your number'></input></Modal.Body>

                                          
                                            <Modal.Footer style={{backgroundColor:"white"}}>
                                                <Button style={{backgroundColor:"red"}} variant="secondary" onClick={handleClose}>
                                                    Cancel
                                                </Button>
                                                <Button style={{backgroundColor:"green"}} variant="primary" onClick={handleClose}>
                                                    Place Order
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>

                                    </Col>
                                </Row>
                            </Container>
                        </Link>
                    </div>
                ))}
                <div style={{height:'40px'}}></div></div>)
}

export default Store