import assert from "node:assert/strict";
import { handler } from "../src/index.js";

function mockRes() {
  return {
    statusCode: null,
    headers: {},
    body: "",
    writeHead(code, headers) { this.statusCode = code; this.headers = headers || {}; },
    end(text) { this.body = text || ""; }
  };
}

const req = { url: "/health" };
const res = mockRes();
handler(req, res);

assert.equal(res.statusCode, 200);
assert.equal(res.body, "OK");

console.log("Unit test passed ✔");
