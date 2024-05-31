import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../index";

describe("API endpoint", () => {
  it("should server ok", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
  });
});
