const http = require("http");
const fs = require("fs");
const port = 5000;

const indexFileContent = fs.readFileSync("../index.html", "utf8");
// const indexFileContent = async function indexContent(){
//     const data = await fs.readFile("../index.html", "utf8")
//     return data
// }

function getRequestData(req) {
  if (req.url === "/") {
    return indexFileContent;
  }
}

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(getRequestData(req));
});

server.listen(port, () => {
  console.log("Server started ... ");
});
