import assert from "node:assert/strict";
import http from "node:http";
import { handler } from "../src/index.js";

const server = http.createServer(handler);
await new Promise((r) => server.listen(8080, r));

const body = await new Promise((resolve, reject) => {
  http.get("http://127.0.0.1:8080/health", (res) => {
    let data = "";
    res.on("data", (c) => (data += c));
    res.on("end", () => resolve({ status: res.statusCode, data }));
  }).on("error", reject);
});

server.close();

assert.equal(body.status, 200);
assert.equal(body.data, "OK");

console.log("Integration test passed ✔");
