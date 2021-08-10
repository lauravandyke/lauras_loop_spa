const router = require("express").Router();
const { shop, key, password } = require("../../secrets");
var shopifyAPI = require("shopify-node-api");
module.exports = router;

var Shopify = new shopifyAPI({
  shop: shop,
  shopify_api_key: key,
  access_token: password,
});

router.get("/", async (req, res, next) => {
  try {
    Shopify.get("/admin/products.json", function (err, data, headers) {
      res.json(data);
    });
  } catch (err) {
    next(err);
  }
});
