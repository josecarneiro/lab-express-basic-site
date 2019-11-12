const express = require('express');

const app = express();

app.use(express.static('public'));

//Middleware
app.use((request, response, next) => {
  console.log('Hit Middleware!');
  next();
});

//ROUTE HANDLERS// 
//Main Page
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});
//About Page
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

//Works Page
app.get('/works', (request, response, next) => {
  response.sendFile(__dirname + '/views/works.html');
});

//Photos Page
app.get('/photos', (request, response, next) => {
  response.sendFile(__dirname + '/views/photos.html');
});


//404 Page 
app.get('*', (request, response, next) => {
  response.status(404);
  response.sendFile(__dirname + '/views/error.html');
});


app.listen(3000);