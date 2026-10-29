import { describe, it, expect } from "vitest";
import request from "supertest";

import app from "../../src/app.js";

describe("DELETE: /products/:productId", () => {
  it("Should delete a product and return 200", async () => {
    const res = await request(app).delete("/products/1");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      message: "Product was removed.",
    });
  });

  it("Should fail to delete a nonexistant product with invalid id", async () => {
    const res = await request(app).delete("/products/mjaujegerenku");
    expect(res.status).toBe(404);
    expect(res.body).toEqual({
      error: "Product not found.",
    });
  });

  it("Should fail to delete a nonexistant product with valid id", async () => {
    const res = await request(app).delete("/products/99999");
    expect(res.status).toBe(404);
    expect(res.body).toEqual({
      error: "Product not found.",
    });
  });
});
