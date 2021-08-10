import axios from "axios";
import history from "../history";

// ACTION TYPES
const GET_ORDERS = "GET_ORDERS";

// ACTION CREATORS
const getOrders = (orders, frequencies, sales) => ({
  type: GET_ORDERS,
  orders,
  frequencies,
  sales,
});

const createOrderHash = (orders) => {
  let freq = {};
  for (let i = 0; i < orders.length; ++i) {
    let order = orders[i];
    let items = order.line_items;
    for (let j = 0; j < items.length; ++j) {
      let item = items[j];
      if (item.variant_id in freq) {
        freq[item.variant_id] += item.quantity;
      } else {
        freq[item.variant_id] = item.quantity;
      }
    }
  }
  return freq;
};

const createValueHash = (orders) => {
  let sales = {};
  for (let i = 0; i < orders.length; ++i) {
    let order = orders[i];
    let items = order.line_items;
    for (let j = 0; j < items.length; ++j) {
      let item = items[j];
      if (item.variant_id in sales) {
        sales[item.variant_id] += item.price * item.quantity;
      } else {
        sales[item.variant_id] = item.price * item.quantity;
      }
    }
  }
  return sales;
};

// THUNK CREATORS
export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/orders");
      let frequencies = await createOrderHash(data.orders);
      let sales = await createValueHash(data.orders);
      dispatch(getOrders(data.orders, frequencies, sales));
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
        orders: action.orders,
        purchasedFreq: action.frequencies,
        sales: action.sales,
      };

    default:
      return state;
  }
};

export default ordersReducer;
