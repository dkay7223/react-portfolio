import React from "react";
import img from "../../Assets/avatar2.jpg";
import addToCart from "../../Assets/add_cart.png";
import fav from "../../Assets/fav.png";
import Icon from "../Icon/Icon";
import "./testimonials.css";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <h4>This is a demo of product_card_component made from react native, that shall be improving over time, as my next project is an Ecommerce web store</h4>
      <h5 className="tp">The worst coding ever, trust me</h5>
      <div className="outer__container container">

        <div className="inner__container">
          <img src={img} alt="" className="Product_image"/>
          
          <div className="product_attributes"><h3>Product Name</h3>
          <h5>Description</h5></div>

          <div className="inner_c_buttons">
            <h3>$1199</h3>
            <Icon src={addToCart} onClick={() => alert("Added to cart")}/>
            <Icon src={fav} onClick={() => alert("Added to WishList")}/>
            
          </div>
        </div>

        <div className="inner__container">
          <img src={img} alt="" className="Product_image"/>
          
          <div className="product_attributes"><h3>Product Name</h3>
          <h5>Description</h5></div>

          <div className="inner_c_buttons">
            <h3>$1199</h3>
            <Icon src={addToCart} onClick={() => alert("Added to cart")}/>
            <Icon src={fav} onClick={() => alert("Added to WishList")}/>
            
          </div>
        </div>


        <div className="inner__container">
          <img src={img} alt="" className="Product_image"/>
          
          <div className="product_attributes"><h3>Product Name</h3>
          <h5>Description</h5></div>

          <div className="inner_c_buttons">
            <h3>$1199</h3>
            <Icon src={addToCart} onClick={() => alert("Added to cart")}/>
            <Icon src={fav} onClick={() => alert("Added to WishList")}/>
            
          </div>
        </div>
        

        <div className="inner__container">
          <img src={img} alt="" className="Product_image"/>
          
          <div className="product_attributes"><h3>Product Name</h3>
          <h5>Description</h5></div>

          <div className="inner_c_buttons">
            <h3>$1199</h3>
            <Icon src={addToCart} onClick={() => alert("Added to cart")}/>
            <Icon src={fav} onClick={() => alert("Added to WishList")}/>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
