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
    Shopify.get("/admin/orders.json", function (err, data, headers) {
      res.json(data);
    });
  } catch (err) {
    next(err);
  }
});

// router.get("/:orderId", async (req, res, next) => {
//   try {
//     Shopify.get(
//       `/admin/api/2020-04/orders.json?ids=${req.params.orderId}&status=any`,
//       function (err, data, headers) {
//         res.json(data);
//       }
//     );
//   } catch (err) {
//     next(err);
//   }
// });
