const http = require("http");
const data = require('./data')
const callbackFunction = (req, resp) => {
  resp.writeHead(200, { "Content-Type": "applicationjson" });
  resp.write(
    JSON.stringify(data)
  );
  resp.end();
};

http.createServer(callbackFunction).listen(4200);
