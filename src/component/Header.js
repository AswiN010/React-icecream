import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
    
    <Navbar  expand="lg" style={{backgroundColor:"#FF5183"}} >
      <Container>
        <Navbar.Brand href="/">
            <img style={{width:"90px",marginBottom:"-10px"}} src='https://i.postimg.cc/SRzS57hr/Dasher-and-Crank-logo-white.png'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{fontSize:"20px",fontFamily:'cursive',marginRight:"10px",color:"white"}}  href="/">HOME</Nav.Link>
            <Nav.Link style={{fontSize:"20px",fontFamily:"cursive",marginRight:"10px",color:'white'}}  href="/story">ABOUT</Nav.Link>
            <Nav.Link style={{fontSize:"20px",fontFamily:"cursive",marginRight:"10px",color:'white'}}  href="/about">MATCHA CAFE</Nav.Link>

            {/* <NavDropdown style={{fontSize:"20px",fontFamily:"cursive",marginRight:"10px",color:'white'}}  title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item  href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link style={{fontSize:"20px",fontFamily:"cursive",marginRight:"10px",color:'white'}}  href="/exclusive">EXCLUSIVE</Nav.Link>
            <Nav.Link style={{fontSize:"20px",fontFamily:"cursive",marginRight:"10px",color:'white'}} href="/contact"  >
              CONTACTS
            </Nav.Link>
            <Nav.Link style={{fontSize:"14px",fontFamily:"cursive",marginRight:"10px",color:'white',border:"4px white solid",borderRadius:"10px"}}  href="/register">JOIN US</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header