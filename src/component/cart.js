import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
// import "../styles/cart.css";
import "../styles/cart.css";
const Cart = ({ cart, setCart, handleChange }) => {
  
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var x = localStorage.getItem("uname"); 
  console.log(x); 
  return (
    <article>
      {cart.map((item) => (
        <div  style={{marginTop:"40px",marginBottom:'50px',height:"200px"}} className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <br></br>
            <p style={{fontSize:"30px"}}>{item.title}</p>
          </div>
          <div>
            <button style={{color:'white',backgroundColor:"#FF5183",borderRadius:"5px"}} onClick={() => handleChange(item, 1)}>+</button>
            <button style={{color:'white',backgroundColor:"#FF5183",borderRadius:"5px",width:"40px"}}>{item.amount}</button>
            <button style={{color:'white',backgroundColor:"#FF5183",borderRadius:"5px"}} onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span style={{color:'white',backgroundColor:"#FF5183"}}>Rs. {item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div  style={{textAlign:'center'}} className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>

      
      <div class="container1 " style={{marginBottom:"40px",backgroundColor:"transparent",width:"50%",marginLeft:'35%'}}>
                                                <div class="btn"><a onClick={handleShow}>BUY NOW</a></div>
                                            </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>DasherCrank</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hi, <span style={{textDecoration:"none"}}>{x}</span> your order will reach your door step within three hours</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:"green"}} variant="primary" onClick={handleClose}>
          Order Placed
          </Button>
        </Modal.Footer>
      </Modal>

    </article>
  );
};

export default Cart;