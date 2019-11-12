const express = require('express');

const app = express();

// Middleware 
app.use(express.static('public'));


// Route handlers
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html')
});

app.get('/home', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html')
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html')
});

app.get('/works', (request, response, next) => {
  response.sendFile(__dirname + '/views/works.html')
});

app.get('*', (request, response, next) => {
  response.status(404);
  response.sendFile(__dirname + '/views/error.html')
});

app.listen(3000);
