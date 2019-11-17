const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available => server gets access to the stylesheet
app.use(express.static('public'));


// this part of code displays results from a html saved in different file
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});


//__dirname shows the base path of the directory we working on  
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response, next) => {
  response.sendFile(__dirname + '/views/works.html');
});
 
  app.get('*', (request, response, next) => {
    response.send('Struggling to find your page!');
  });

  // Server Started
app.listen(3001, () => {
    console.log('This is working just fine mate')
  });