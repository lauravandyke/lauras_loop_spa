import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/products";
import { fetchOrders } from "../store/orders";

import Pagination from "./Pagination";
import SelectedProducts from "./SelectedProducts";

class Products extends React.Component {
  constructor() {
    super();
    this.state = { currentPage: 1, variants: [] };
    this.paginate = this.paginate.bind(this);
  }
  componentDidMount() {
    try {
      this.props.getProducts();
      this.props.getOrders();
    } catch (error) {
      console.log(error);
    }
  }

  paginate(pageNumber) {
    this.setState({ currentPage: pageNumber });
  }

  render() {
    const { allProducts } = this.props;
    let idxLastPost = this.state.currentPage * 10;
    let idxFirstPost = idxLastPost - 10;

    let selected = allProducts
      ? allProducts.slice(idxFirstPost, idxLastPost)
      : "";

    return (
      <>
        <h1>Laura's Loop SPA</h1>
        <SelectedProducts
          selected={selected}
          pageCount={this.props.pageCount}
        />
        <Pagination
          postsPerPage={10}
          pageCount={this.props.pageCount}
          paginate={this.paginate}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    pageCount: state.products.pageCount,
    allProducts: state.products.allProducts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
  getOrders: () => dispatch(fetchOrders()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
