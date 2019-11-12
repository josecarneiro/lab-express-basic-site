const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
});

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/public/works.html");
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/404.html");
});





app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));