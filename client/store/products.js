import axios from "axios";
import history from "../history";

// ACTION TYPES
const GET_PRODUCTS = "GET_PRODUCTS";

// ACTION CREATORS
const getProducts = (productInfo) => ({
  type: GET_PRODUCTS,
  pageCount: productInfo.pageCount,
  allProducts: productInfo.allProducts,
});

// THUNK CREATORS
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data: productInfo } = await axios.get("/api/products/info");
      dispatch(getProducts(productInfo));
    } catch (error) {
      console.log(error);
    }
  };
};

// REDUCER
const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        pageCount: action.pageCount,
        allProducts: action.allProducts,
      };
    default:
      return state;
  }
};

export default productsReducer;
