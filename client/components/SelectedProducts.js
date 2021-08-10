import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function SelectedProducts(props) {
  let pageCount = props.pageCount;
  console.log("props in SelectedProducts", props);
  return (
    <div className="clients-container">
      {Array.isArray(props.selected)
        ? props.selected.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        : "No products yet"}
    </div>
  );
}

export default SelectedProducts;
