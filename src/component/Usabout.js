import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'bootstrap';
import './usabout.css'
function Usabout() {
  return (
    <div className='f'>
<>
<div style={{ position: " relative", border: "7px transparent solid" }} >
                    <img style={{ width: "100%",border: "10px transparent solid" }} src='https://i.postimg.cc/qv0P02Kj/Screenshot-2023-02-13-131620.jpg' />
                    <div style={{ position: " absolute", top: "180px", left: "16px", color: "pink" }} >
                        <span style={{ color: "#FF5183", fontSize: "60px", fontFamily: "impact,inital" }}>ABOUT</span>
                        <p style={{ color: "white", fontSize: "30px", fontFamily: "impact" }}>Best Ice Cream in Florida</p>
                    </div>
                </div>


<Container style={{ backgroundImage:"https://woodlands-ice-cream.co.uk/wp-content/themes/woodlands/img/wooden_panels.jpg", border: "10px transparent solid" }}>
                        <Row>
                            <Col  sm={8}>
                                <h1 className='text-center' style={{ color: "black", fontFamily: "cursive", marginTop: "20px" ,fontStyle:"uppercase"}}>

                                A dairy farm for four generations had to make a decision</h1>
                                
                                <p className='text-center'
                                    style={{ fontSize: "20px", color: "black", fontFamily: "cursive" }}>
                                    Just like so many small dairy farmers in the 1990s, we found it increasingly difficult to make a living from just dairy production and began to explore new ways to supplement our income through diversification and expansion. Our farm had successfully been producing quality organic milk for many years, so the idea of applying it in the manufacture of something new seemed an obvious choice.
                                </p>
                               
                            </Col>
                            <Col sm={4}>
                                <img style={{ width: "100%", height: "100%" }} src='https://woodlands-ice-cream.co.uk/wp-content/uploads/2018/10/China_plate@2x.png' />

                            </Col>
                        </Row>
                    </Container>

                    <p className='text-center' style={{fontSize:"70px",color:"black",fontFamily:"initial"}}>OUR STORY</p>
                   
<Container style={{ backgroundImage:"https://woodlands-ice-cream.co.uk/wp-content/themes/woodlands/img/wooden_panels.jpg", border: "10px transparent solid" }}>
                        <Row>
                            <Col  sm={6}>
                            <img style={{ width: "100%", height: "100%",borderRadius:"40px" }} src='https://woodlands-ice-cream.co.uk/wp-content/uploads/2018/10/honeycombe@2x-1024x614.jpg' />

                               
                            </Col>
                            <Col sm={6}>
                         
                                <p className='text-center' style={{ fontSize:"70px",color: "black", fontFamily: "cursive", marginTop: "20px" ,fontStyle:"uppercase"}}>

                                We made a big decision…</p>

<p className='text-center'
    style={{ fontSize: "20px", color: "black", fontFamily: "cursive" }}>
Together with my wife Julie, I now run Woodland’s of Erbistock Ice Cream, but in those early days, the decision to create great ice cream from our rich and creamy milk fell to my father and elder brother, Michael, who had returned home to the farm a few years earlier</p>
                            </Col>
                        </Row>
                    </Container>



                    <Container style={{ backgroundImage:"https://woodlands-ice-cream.co.uk/wp-content/themes/woodlands/img/wooden_panels.jpg", border: "10px transparent solid" }}>
                        <Row>
                            <Col  sm={6}>
                                <p className='text-center' style={{fontSize:"60px", color: "black", fontFamily: "fantasy", marginTop: "20px" ,fontStyle:"uppercase"}}>

                                Our first ice cream was born…</p>
                                
                                <p className='text-center'
                                    style={{ fontSize: "20px", color: "black", fontFamily: "cursive" }}>
                                    Just like so many small dairy farmers in the 1990s, we found it increasingly difficult to make a living from just dairy production and began to explore new ways to supplement our income through diversification and expansion. Our farm had successfully been producing quality organic milk for many years, so the idea of applying it in the manufacture of something new seemed an obvious choice.
                                </p>
                               
                            </Col>
                            <Col sm={6}>
                                <img style={{ width: "100%", height: "100%" ,borderRadius:"60px"}} src='https://woodlands-ice-cream.co.uk/wp-content/uploads/2018/10/Depositphotos_64750477_original@2x-1000x630.jpg' />

                            </Col>
                        </Row>
                    </Container>
                    
                    </>
    </div>

  )
}

export default Usabout