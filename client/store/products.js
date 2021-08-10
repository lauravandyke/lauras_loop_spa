import axios from "axios";
import history from "../history";

// ACTION TYPES
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PAGE_COUNT = "GET_PAGE_COUNT";

// ACTION CREATORS
const getProducts = (products, pageCount, allProducts) => ({
  type: GET_PRODUCTS,
  products,
  pageCount,
  allProducts,
});

const getPageCount = (products) => {
  let itemCount = 0;
  let allProducts = [];
  products.map((product) => {
    itemCount += product.variants.length;
    product.variants.map((variant) => {
      variant.category = product.title;
      variant.img = product.image ? product.image.src : "";
      allProducts.push(variant);
    });
  });
  return { pageCount: Math.ceil(itemCount / 10), allProducts };
};

// THUNK CREATORS
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/products");
      let { pageCount, allProducts } = getPageCount(data.products);
      dispatch(getProducts(data.products, pageCount, allProducts));
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
        products: action.products,
        pageCount: action.pageCount,
        allProducts: action.allProducts,
      };
    default:
      return state;
  }
};

export default productsReducer;
