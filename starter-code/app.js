const express = require("express");

const myapp = express();

myapp.use(express.static('public'));

myapp.get("/", (request, response, next) => {
  //response.send("hello");
  response.sendFile(__dirname + "/views/home.html");
});

myapp.get("/about.html", (request, response, next) => {
  //response.send("hello");
  response.sendFile(__dirname + "/views/about.html");
});

myapp.get("/work.html", (request, response, next) => {
  //response.send("hello");
  response.sendFile(__dirname + "/views/work.html");
});

myapp.get("/photogallery.html", (request, response, next) => {
  //response.send("hello");
  response.sendFile(__dirname + "/views/photogallery.html");
});

myapp.get("*", (request, response, next) => {
  //response.send("hello");
  response.send("Page not found");
});

myapp.listen(3000);
