const getOrderInfo = (orders) => {
  let freq = {};
  let sales = {};
  for (let i = 0; i < orders.length; ++i) {
    let order = orders[i];
    let items = order.line_items;
    for (let j = 0; j < items.length; ++j) {
      let item = items[j];
      if (item.variant_id in freq) {
        freq[item.variant_id] += item.quantity;
      } else if (!(item.variant_id in freq)) {
        freq[item.variant_id] = item.quantity;
      }
      if (item.variant_id in sales) {
        sales[item.variant_id] += item.price * item.quantity;
      } else if (!(item.variant_id in sales)) {
        sales[item.variant_id] = item.price * item.quantity;
      }
    }
  }
  return { freq, sales };
};

const getProductInfo = (products) => {
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
  return { pageCount: Math.ceil(itemCount / 15), allProducts };
};

module.exports = { getOrderInfo, getProductInfo };
