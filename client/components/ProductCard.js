import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  let imgSrc = props.product.image
    ? props.product.image.src
    : "https://www.eduprizeschools.net/wp-content/uploads/2016/06/No_Image_Available.jpg";
  return (
    <div className="card">
      <div>
        <div className="container">
          <h4>
            <b>
              {props.title} - {props.variant.title}
            </b>
          </h4>

          <ul className="cardList">
            <li>Price: ${props.variant.price}</li>
            <li>Purchases</li>
            <li>In Stock: {props.variant.inventory_quantity}</li>
            <li>Value of orders</li>
          </ul>
        </div>
      </div>
      <img src={imgSrc} style={{ width: "100%" }} />
    </div>
  );
}

export default ProductCard;
