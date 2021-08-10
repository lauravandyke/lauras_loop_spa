import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  let purchased = null;
  let sales = null;
  if (props.purchasedFreq) {
    purchased =
      props.product.id in props.purchasedFreq
        ? props.purchasedFreq[props.product.id]
        : 0;
  }
  if (props.sales) {
    sales = props.product.id in props.sales ? props.sales[props.product.id] : 0;
  }

  let imgSrc = props.product.img
    ? props.product.img
    : "https://www.eduprizeschools.net/wp-content/uploads/2016/06/No_Image_Available.jpg";
  return (
    <div className="card">
      <div>
        <div className="container">
          <h4>
            <b>
              {props.product.category} - {props.product.title}
            </b>
          </h4>

          <ul className="cardList">
            <li>Price: ${props.product.price}</li>
            <li>Purchases: {purchased}</li>
            <li>In Stock: {props.product.inventory_quantity}</li>
            <li>Sales: ${sales}</li>
          </ul>
        </div>
      </div>
      <img src={imgSrc} style={{ width: "100%" }} />
    </div>
  );
}

export default ProductCard;
