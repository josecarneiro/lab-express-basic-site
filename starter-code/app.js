const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/index', (request, response, next) => {
    response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html');
});

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
});

//we use the "*" to set every single page that is not found.
app.get('*', (request, response, next) => {
    response.status(404);
    response.sendFile(__dirname + '/views/error.html');
});

app.listen(3000);