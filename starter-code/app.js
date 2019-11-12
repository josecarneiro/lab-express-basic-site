const express = require('express');

const app = express();

app.use(express.static('public'));


//Route Handlers
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response, next) => {
  response.sendFile(__dirname + '/views/works.html');
});

//catch all route handler
//app.get('*', (request, response, next) => {
//  response.status(404);
//  response.sendFile(__dirname + 'views/error.html');
//});

app.listen(3000);