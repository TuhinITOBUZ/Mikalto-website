import http from "http"
import * as data from "./js/data.mjs";

const port = 5000;

function getRequestData(req) {
  if (req.url === "/") {
    let status = 200
    return JSON.stringify({
      status,
      pageBanner : data.pageBanner,
      homestay1 : data.homestay1,
      homestay2 : data.homestay2,
      homestay3 : data.homestay3,
      wellnessService: data.wellnessService,
      giftCardService : data.giftCardService,
      spaService : data.spaService,
      adventureService: data.adventureService,
      showRooms: data.showRooms,
    });
  }
  else{
    return JSON.stringify("Page not available.")
  }
}

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(getRequestData(req));
});

server.listen(port, () => {
  console.log("Server started ... ");
});
