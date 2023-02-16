import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'bootstrap';
function About() {
    return (
        <div style={{ backgroundColor: "white" }}>
            <>
                <div style={{ position: " relative", border: "7px #00C4F solid" }} >
                    <img style={{ width: "100%",border: "10px #00C4FF solid" }} src='https://i.postimg.cc/qv0P02Kj/Screenshot-2023-02-13-131620.jpg' />
                    <div style={{ position: " absolute", top: "180px", left: "16px", color: "pink" }} >
                        <span style={{ color: "#FF5183", fontSize: "60px", fontFamily: "impact,inital" }}>ABOUT</span>
                        <p style={{ color: "white", fontSize: "30px", fontFamily: "impact" }}>Best Ice Cream in Florida</p>
                    </div>
                </div>
                <img style={{width:"100%",}} src='./don.jpg'/>

                <div style={{ backgroundColor: "#00C4FF" }}>
                    <Container style={{ backgroundColor: "#F5F5F5", border: "10px #00C4FF solid" }}>
                        <Row>
                            <Col  sm={6}>
                                <h1 style={{ color: "#00C4FF", fontFamily: "cursive", marginTop: "20px" }}>

                                    MATCHA CAFÉ</h1>
                                <p
                                    style={{ fontSize: "30px", color: "black", fontFamily: "cursive" }}>
                                    We also have the Miami's Best Matcha!
                                </p>
                                <p
                                    style={{ fontSize: "15px", color: "black", fontFamily: "cursive" }}>
                                    Our Matcha tea drinks and food items fuse Japanese and Miami Latin flavors, we are happy to share with you Miami’s first specialty Matcha Cafe.
                                    Different textures, flavors and colors. We also offer vegan options.<br></br>
                                    Come by today to try these delicious and refreshing Matcha Cafes.
                                </p>
                            <a href='/contact'>    <button
                                    style={{ backgroundColor: "#00C4FF",height:"70px", width: "30%", fontFamily: "inital",borderRadius:"10px",marginTop:"10px",textDecoration:"none",border:"5px white solid" }}
                                >CONTACT US</button></a>
                            </Col>
                            <Col sm={6}>
                                <img style={{ width: "100%", height: "100%", border: "10px #00C4FF solid",borderRadius:"30px" }} src='https://i.postimg.cc/0NSNzLZ9/Screenshot-2023-02-13-203802.jpg' />

                            </Col>
                        </Row>
                    </Container>
                </div>

            </>
        </div>
    )
}

export default About