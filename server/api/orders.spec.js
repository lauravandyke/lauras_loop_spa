/* global describe beforeEach it */

const { expect } = require("chai");
const request = require("supertest");

const app = require("../app");

describe("Orders route", () => {
  describe("/api/orders/", () => {
    it("GET /api/orders", async () => {
      const res = await request(app).get("/api/orders").expect(200);

      expect(res.body.orders).to.be.an("array");
      expect(res.body.orders.length).to.equal(50);
    });
  }); // end describe('/api/users')
}); // end describe('User routes')
