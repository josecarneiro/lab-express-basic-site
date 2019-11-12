const express = require("express");

const app = express();

app.use(express.static("public"));

// Middleware

app.use((request, response, next) => {
    next();
});

// Route Handlers

app.get("/stylesheets/style.css", (request, response, next) => {
    response.sendFile(__dirname + "/views/home.html");
});

app.get("/home", (request, response, next) => {
    response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response, next) => {
    response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response, next) => {
    response.sendFile(__dirname + "/views/works.html");
});

app.get("/photo", (request, response, next) => {
    response.sendFile(__dirname + "/views/photo.htm");
});

// "Catch all" route handlers

app.get("*", (request, response, next) => {
    response.status(404);
    response.sendFile(__dirname + "/views/error.html");
});

app.listen(3000);