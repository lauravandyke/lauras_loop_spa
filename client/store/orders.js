import axios from "axios";
import history from "../history";

// ACTION TYPES
const GET_ORDERS = "GET_ORDERS";

// ACTION CREATORS
const getOrders = (orderInfo) => ({
  type: GET_ORDERS,
  freq: orderInfo.freq,
  sales: orderInfo.sales,
});

// THUNK CREATORS
export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      let { data: orderInfo } = await axios.get("/api/orders/info");
      dispatch(getOrders(orderInfo));
    } catch (error) {
      console.log(error);
    }
  };
};

// REDUCER
const ordersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        sales: action.sales,
        freq: action.freq,
      };

    default:
      return state;
  }
};

export default ordersReducer;
