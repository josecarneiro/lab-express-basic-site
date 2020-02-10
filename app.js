const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});
app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});
app.get('/work', (request, response) => {
  response.sendFile(__dirname + '/views/work.html');
});
app.get('*', (request, response) => {
  response.send('Error 404');
});

app.listen(3000);
