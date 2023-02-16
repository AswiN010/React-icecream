import React from 'react'
import './usabout.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './Login';
function Home() {
  return (
    <div className='f' style={{backgroundColor:"",height:"100%"}}>
      <>
      <img style={{width:"100%"}} src='./don1.jpg'/>
      <img style={{width:"100%"}} src='./nuevas-olas.png'/>

      <div>
      <Row>
        <Col sm={8}>
        <img style={{width:"100%",height:"100%"}} src='https://dasherandcrank.com/wp-content/uploads/2023/01/Dasher-Crank-Menu-pdf.jpg'/>
 
        </Col>
        <Col sm={4}>
        <img style={{width:"100%",height:"100%"}} src='https://dasherandcrank.com/wp-content/uploads/2023/01/Matcha-Cafe-Menu-1-pdf.jpg'/>

        </Col>
      </Row>
      </div>

      <div>
      <Row>
        <Col>
        <img style={{width:"100%",marginTop:'130px'}} src='https://woodlands-ice-cream.co.uk/wp-content/uploads/2018/10/chocolate_tub@2x.png'></img>
        </Col>
        <Col xs={6}>
        <p className='text-center' style={{fontSize:"40px", color: "black", fontFamily: "fantasy", marginTop: "60px"}}>

        Delicious ice cream, made from our very own organic milk</p>

<p className='text-center'
    style={{ fontSize: "20px", color: "black", fontFamily:"revert-layer" }}>
Twenty five years ago, we set out to create top-notch ice cream, using the organic milk made on our farm in Erbistock, a little village hidden away amongst the gentle hills of North East Wales. We soon converted a little barn and from it, eagerly worked towards our goal; to make a family of ice creams that would be second to none in their taste and creamy texture.</p>
     <div className='text-center'>
     <a href='/login'  style={{color:"green",fontSize:"30px",border:"6px green solid",fontFamily:"cursive",textDecoration:"none",borderRadius:"10px"}}>SIGN UP</a>
     </div>
        </Col>
        <Col>
        <img style={{width:"100%",marginBottom:"30px",marginTop:"-20px"}} src='https://woodlands-ice-cream.co.uk/wp-content/uploads/2018/10/ice_cream_basket@2x.png'></img>

        </Col>
      </Row>
</div>

<Container style={{ backgroundImage:"https://woodlands-ice-cream.co.uk/wp-content/themes/woodlands/img/wooden_panels.jpg", border: "10px transparent solid" }}>
                        <Row>
                            <Col  sm={8}>
                                <p className='text-center' style={{fontSize:"50px", color: "black", fontFamily: "fantasy", marginTop: "20px" ,fontStyle:"uppercase"}}>

                                Share our flavoursome range of gorgeous ice cream</p>
                                
                                <p className='text-center'
                                    style={{ fontSize: "20px", color: "black", fontFamily: "cursive" }}>
We don’t use frozen food distributors! If you want to know where your Ice cream
comes from and how it’s made please contact us. Our flavour list changes with the seasons,
and we always have samples available. Quality, Provenance, Service.                                </p>
                               
                            </Col>
                            <Col sm={4}>
                                <img style={{ width: "100%",borderRadius:"60px",marginBottom:"-120px"}} src='https://woodlands-ice-cream.co.uk/wp-content/uploads/2018/10/strawberrypetal.png'/>
                       </Col> </Row>
                    </Container>

      <img style={{width:"100%"}} src='https://i.postimg.cc/prRtDqMh/Screenshot-2023-02-13-164242.jpg'/>
     </>


        </div>
  )
}

export default Home