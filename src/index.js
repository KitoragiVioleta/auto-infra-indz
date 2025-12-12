import http from "node:http";

export function handler(req, res) {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("OK");
  }
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Hello from INDZ!");
  }
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not found");
}

if (process.env.NODE_ENV !== "test") {
  const server = http.createServer(handler);
  server.listen(8080, () => console.log("Server running on :8080"));
}
