# Laura's Loop Spa

To run the project on your local machine:

Clone the repository: `git clone https://github.com/lauravandyke/lauras_loop_spa.git` and cd into it.

Run `npm install` to download project dependencies.

In the root folder, create a `secrets.js` file with:
`
const shop = <SHOP-NAME>
const key = <PRIVATE-APP-API-KEY>
const password = <PRIVATE-APP-PASSWORD>
const secret = <PRIVATE-APP-SECRET>

module.exports = { shop, key, password, secret };`

Then run `npm run start:dev` to see the project on http://localhost:8080/.

Run `npm run test` to run the tests.
