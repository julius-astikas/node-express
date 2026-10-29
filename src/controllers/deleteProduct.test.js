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
});
