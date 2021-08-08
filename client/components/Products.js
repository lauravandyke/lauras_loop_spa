import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/products";
import { fetchOrders } from "../store/orders";
import ProductCard from "./ProductCard";

class Products extends React.Component {
  componentDidMount() {
    try {
      this.props.getProducts();
      this.props.getOrders();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { products, orders } = this.props;
    return (
      <>
        <div className="clients-container">
          {products.map((product) => {
            return product.variants.map((variant) => (
              <ProductCard
                key={variant.id}
                variant={variant}
                title={product.title}
                product={product}
              />
            ));
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  orders: state.orders,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
  getOrders: () => dispatch(fetchOrders()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
