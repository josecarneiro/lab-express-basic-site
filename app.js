const express = require('express');

const app = express();

app.use(express.static('public'));

app.use((request, response, next) => {
  console.log('Passing through the middleware');
  next();
});

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html');
});

app.listen(12345);