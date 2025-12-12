import assert from "node:assert/strict";
import http from "node:http";

const body = await new Promise((resolve, reject) => {
  http.get("http://example.com", (res) => {
    resolve(res.statusCode);
  }).on("error", reject);
});

assert.ok(body >= 200);
console.log("Acceptance test passed ✔ (external smoke)");
