const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/about',(request, response, next) =>{
  
  response.sendFile(__dirname + '/views/about.html')
});

app.get('/home',(request, response, next) =>{
  
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/works',(request, response, next) =>{
  
  response.sendFile(__dirname + '/views/works.html');
});


//catch all route handler
app.get('*',(request, response, next) =>{ // order matters, this is read from top to bottom
  response.status(404);                   // * stands for anything else
  response.send('not found');
  // response.sendFile(__dirname + '/views/error.html')
});
app.listen(3000);
