import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
   
   
  
   
  return (
    <>

<img style={{width:"100%"}} src='./don1.jpg'/>

   
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My Shop <i className="fas fa-shop"></i>
        </span>
        <div className="cart" onClick={() => setShow(false)}>
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