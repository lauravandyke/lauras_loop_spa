import axios from "axios";
import history from "../history";

// ACTION TYPES
const GET_PRODUCTS = "GET_PRODUCTS";

// ACTION CREATORS
const getProducts = (products) => ({
  type: GET_PRODUCTS,
  products,
});

// THUNK CREATORS
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/products");
      dispatch(getProducts(data.products));
    } catch (error) {
      console.log(error);
    }
  };
};

// REDUCER
const productsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;

    default:
      return state;
  }
};

export default productsReducer;
