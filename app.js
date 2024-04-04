// const http = require("http");
import http from "http";
import { data } from "./data.js";

const port = process.env.PORT || 8080;

//create a server object:
const server = http.createServer((req, res) => {
  const { method } = req;
  // const method = req.method;

  switch (method) {
    case "GET":
      return handleGetMethod(res);
    case "POST":
      return handlePostMethod(res);
    case "PATCH":
      return handlePatchMethod(req, res);
    case "DELETE":
      return handleDeleteMethod(req, res);
    default:
      throw new Error(`Not supported method: ${method}`);
  }
});

function handleGetMethod(res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(data)); //write a response to the client
  res.end(); //end the response
}

function handleDeleteMethod(res) {}
function handlePostMethod(res) {}
function handlePatchMethod(res) {}

server.listen(port, () => {
  console.log(`Server is running on port localhost:${port}`);
});
