const express = require('express');

const app = express();

app.use(express.static('public'));

app.use((request, response, next) => {
  console.log('Passing through the middleware');
  next();
});

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/Home.html');
});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/About');
});

app.get('*', (request, response) => {
  response.sendFile(__dirname + '/views/Works');
});

app.listen(3000);
