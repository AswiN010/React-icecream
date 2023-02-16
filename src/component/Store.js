import React from 'react'
import { useState } from 'react';
import employee from './Product';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import './usabout.css'
function Store() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <img style={{ width: "100%" }} src='./don1.jpg' />
            <img style={{ width: "100%" }} src='./nuevas-olas.png' />

            {

                employee.map(item => (
                    <div>
                        <Link style={{ textDecoration: "none" }} >

                            <Container >
                                <Row className='e' style={{ marginBottom: "30px" }} >
                                    <Col sm={6}>
                                        <img style={{ width: "90%", height: "90%", borderRadius: "40px", marginTop: "20px" }} src={item.photograph} />


                                    </Col>
                                    <Col className='text-center' style={{ marginLeft: "-10px" }} sm={6}>

                                        <p style={{ fontSize: "40px", color: "black", fontFamily: "monospace", marginTop: "20px", fontStyle: "uppercase" }}>

                                            {item.uname}</p>
                                        <p
                                            style={{ fontSize: "20px", color: "black", fontFamily: "cursive" }}>
                                            {item.detail}            </p>
                                        <p
                                            style={{ fontSize: "20px", color: "black", fontFamily: "cursive" }}>
                                            {item.address}            </p>
                                        <h1 style={{ fontSize: "20px", color: "black", fontFamily: "cursive" }}>Rs. <span style={{ fontFamily: "monospace", fontSize: "70px" }}>{item.price}</span></h1>



                                        <Button style={{borderRadius:"200px",width:"1px", backgroundColor: "transparent",marginLeft:"-280px",textDecorationStyle:"none" }}  onClick={handleShow}>
                                            <div class="container1 ">
                                                <div class="btn"><a>BUY NOW</a></div>
                                            </div>
                                        </Button>

                                        <Modal style={{ color: "black" }} show={show} onHide={handleClose}>
                                            <Modal.Header style={{backgroundColor:"white",border:"4px green solid"}} closeButton>
                                                <Modal.Title style={{fontSize:"40px",fontfamily:"cursive"}}>DasherCranK</Modal.Title>
                                            </Modal.Header >
                                            <Modal.Body style={{backgroundColor:"white"}}>
                                                <span style={{fontSize:"30px"}}>Order Details</span>
                                                <br></br>
                                           these order will reach your door steps within three Hours from NOW, &
                                           the payment will be collected by the deleviered person
                                           <br></br></Modal.Body>

                                          
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
                ))}</>)
}

export default Store