import test from "node:test";
import assert from "node:assert/strict";
import { handler } from "../src/index.js";

function mockRes() {
  return {
    statusCode: null,
    headers: {},
    body: "",
    writeHead(code, headers) {
      this.statusCode = code;
      this.headers = headers || {};
    },
    end(text) {
      this.body = text || "";
    }
  };
}

test("Unit: GET /health returns OK", () => {
  const req = { url: "/health" };
  const res = mockRes();

  handler(req, res);

  assert.equal(res.statusCode, 200);
  assert.equal(res.body, "OK");
});

test("Unit: GET / returns Hello", () => {
  const req = { url: "/" };
  const res = mockRes();

  handler(req, res);

  assert.equal(res.statusCode, 200);
  assert.equal(res.body, "Hello from INDZ!");
});

test("Unit: unknown route returns 404", () => {
  const req = { url: "/unknown" };
  const res = mockRes();

  handler(req, res);

  assert.equal(res.statusCode, 404);
  assert.equal(res.body, "Not found");
});
;
