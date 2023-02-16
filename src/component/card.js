import React from "react";
import "../styles/card.css";

const Cards = ({ item, handleClick }) => {
  const { title,  price, img } = item;
  return (
   
    <div className="cards " style={{height:"400px"}}>
      <div className="image_box"></div>
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={img} alt="Avatar" style={{width:"350px",height:"350px",marginTop:"10px",borderRadius:"20px"}}/>
    </div>
    <div class="flip-card-back">
    <div className="details">
        <h5
       style={{fontSize:"14px",fontFamily:'GoldmanBold',marginTop:"10px",color:"white",fontSize: "40px"}}>{title}</h5>
         <span style={{ fontFamily: "Chilanka", fontSize: "30px",color:"black" }}> Rs.{price}</span>
      <br></br>
       <button className="button" style={{backgroundColor:"green",borderRadius:"10px",fontFamily:"15px"}}  onClick={() => handleClick(item)}><span>Add To Cart </span></button>
      </div>
    </div>
  </div>
</div>
</div>

  );
};

export default Cards;