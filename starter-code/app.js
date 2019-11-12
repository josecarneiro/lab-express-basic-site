const express = require("express");
const app = express();

app.use(express.static("public"));
// app.use(express.static("views"));
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/showcase", (request, response, next) => {
  response.sendFile(__dirname + "/views/showcase.html");
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});

app.get("*", (request, response, next) => {
  response.sendFile(__dirname + "/views/notfound.html");
});

app.listen(3000);
