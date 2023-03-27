import http from "http"
import { pageBanner } from "./urls.mjs";

const port = 5000;

function getRequestData(req) {
  if (req.url === "/") {
    return JSON.stringify(pageBanner);
  
  }
}

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(getRequestData(req));
});

server.listen(port, () => {
  console.log("Server started ... ");
});
