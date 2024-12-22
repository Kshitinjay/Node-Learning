const http = require("http");
const colors = require("colors");

const callbackFunction = (req, resp) => {
  console.log("Testing package".green);
  resp.write("<h1>Hello world par 123</h1>");
  resp.end();
};
console.log("2".green);
http.createServer(callbackFunction).listen(4200);
