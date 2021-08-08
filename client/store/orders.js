import axios from "axios";
import history from "../history";

// ACTION TYPES
const GET_ORDERS = "GET_ORDERS";

// ACTION CREATORS
const getOrders = (orders) => ({
  type: GET_ORDERS,
  orders,
});

// THUNK CREATORS
export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/orders");
      dispatch(getOrders(data.orders));
    } catch (error) {
      console.log(error);
    }
  };
};

// REDUCER
const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders;

    default:
      return state;
  }
};

export default ordersReducer;
