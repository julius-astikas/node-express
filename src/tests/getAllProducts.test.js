import { describe, it, expect } from "vitest";
import request from "supertest";

import app from "../../src/app.js";

describe("GET: /products/", () => {
  it("Get all users, and return 200", async () => {
    const res = await request(app).get("/products/");
    expect(res.status).toBe(200);
  });
});
