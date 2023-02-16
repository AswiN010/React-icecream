import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Contact.css'
function Contact() {
  return (
    <div>
       <>
       <img style={{width:"100%"}} src='https://i.postimg.cc/3W5c8f8f/Screenshot-2023-02-13-214924.jpg'/>

<div style={{backgroundColor: "whitesmoke"}}>
<Container style={{ backgroundColor: " #F5F5F5", border: "10px #F5F5F5 solid" }}>
                        <Row>
                            <Col sm={6}>
                            <img style={{ width: "100%", height: "100%", border: "10px #FF5183 solid",borderRadius:"20px" }} src='https://i.postimg.cc/xjZrFYm5/Screenshot-2023-02-13-214559.jpg' />
                         
                            </Col>
                            <Col sm={6}>
                            <div  class="form">
                            <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder="Name " />
        <div class="cut"></div>
      </div>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" Number" />
        <div class="cut"></div>
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" placeholder="Email " />
        <div class="cut"></div>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder="Message " />
        <div class="cut cut-short"></div>
      </div>
      <button type="text" class="submit">submit</button>
    </div>

                            </Col>
                        </Row>
                    </Container>
</div>
<img style={{width:"100%",border:"10px #FF5183 solid"}} src='popo.jpg'/>

       </> 
    </div>
  )
}

export default Contact