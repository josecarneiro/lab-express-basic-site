const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("*", (request, response, next) => {
  response.status(404);
  response.sendFile(__dirname + "/views/works.html")
});

app.get("*", (request, response, next) => {
  response.status(404);
  response.sendFile(__dirname + "/views/gallery.html")
});

app.listen(5000, () => {
  console.log('My first app listening on port 4000!')
});