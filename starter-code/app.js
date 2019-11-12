const express = require("express");
const app = express();

app.use(express.static('public'));


// Middleware
app.use((request, response, next) => {
    next();
});




// Route Handlers
app.get('/', (request, response, next) => {
    // response.send('BORBAAAAAAAAAAA!');
    response.sendFile(__dirname + "/views/home.html");
});

app.get('/about', (request, response, next) => {
    //response.send('Salvem os Recifes do mundo!');
    response.sendFile(__dirname + "/views/about.html");
});

app.get('/works', (request, response, next) => {
    //response.send('Salvem os Recifes do mundo!');
    response.sendFile(__dirname + "/views/works.html");
});

app.get('/gallery', (request, response, next) => {
    //response.send('Salvem os Recifes do mundo!');
    response.sendFile(__dirname + "/views/gallery.html");
});

app.get('*', (request, response, next) => {
    response.status(404);
    //response.send('You broke this app. Congrats you prick!');
    response.sendFile(__dirname + "/views/error.html");
});

app.listen(3000);