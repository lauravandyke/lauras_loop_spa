/* global describe beforeEach it */

const { expect } = require("chai");
const request = require("supertest");

const app = require("../app");

describe("Products route", () => {
  describe("/api/products/", () => {
    it("GET /api/products", async () => {
      const res = await request(app).get("/api/products").expect(200);

      expect(res.body.products).to.be.an("array");
      expect(res.body.products.length).to.equal(23);
    });
  }); // end describe('/api/users')
}); // end describe('User routes')
