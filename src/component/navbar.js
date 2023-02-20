import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
   
   
  
   
  return (
    <>

<img style={{width:"100%",border:"6px white solid"}} src='./don1.jpg'/>

   
      <div className="nav_box">
        <span style={{backgroundColor:"#FF5183", border:"2px white solid",borderRadius:"10px",padding:"5px",marginTop:"20px"}} className="my_shop" onClick={() => setShow(true)}>
           My Shop  <i className="fas fa-shop"></i>
        </span>
        <div style={{backgroundColor:"#FF5183",width:"100px",textAlign:"center", border:"2px white solid",borderRadius:"10px",padding:"5px",marginTop:"20px"}} className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    
    </>
  );
};

export default Navbar;