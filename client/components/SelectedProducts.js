import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function SelectedProducts(props) {
  return (
    <div className="clients-container">
      {Array.isArray(props.selected)
        ? props.selected.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        : "Loading products"}
    </div>
  );
}

export default SelectedProducts;
