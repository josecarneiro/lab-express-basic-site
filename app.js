const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.static('node_modules/lightbox2/dist'));

app.use((request, response, next) => {
  console.log('Passing through the middleware');
  next();
});
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});
app.get('/photoGallery', (request, response) => {
  response.sendFile(__dirname + '/views/photoGallery.html');
});
app.get('*', (request, response) => {
  response.sendFile(__dirname + '/views/error.html');
});

app.listen(3000);
