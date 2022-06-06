const http = require("http");

let requestsCount = 0;
const server = http.createServer((request, response) => {
  requestsCount++;

  switch (request.url) {
    case "/students":
      response.write("STUDENTS");
      break;
    case "/courses":
      response.write("FRONT+ BACK");
    default:
      response.write("NOT FOUND 404");
  }
  response.write(" IT-KAMASUTRA: " + requestsCount);
  response.en
server.listen(3003);
