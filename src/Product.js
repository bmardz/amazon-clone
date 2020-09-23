import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="Product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <string>19.99</string>
        </p>
        <div className="product__rating">
          <p>🌟 </p>
          <p>🌟 </p>
          <p>🌟 </p>
        </div>
      </div>

      <img src="" alt="" />
    </div>
  );
}

export default Product;
