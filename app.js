const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

hbs.registerPartials(__dirname + '/views/partials');

//Objects for partials

const works = [
  {
    medium: 'Oil Painting',
    image: '/imgs/Albrecht_Dürer-Adam_and_Eve_(Prado).jpg',
    caption: 'Adam and Eve, 1507, Museo del Prado',
    description:
      'Albrecht Dürer painted a vast number of oil paintings, including religious scenes, portraits and landscapes.'
  },
  {
    medium: 'Drawings',
    image: '/imgs/Self-portrait_at_13_by_Albrecht_Dürer.jpg',
    caption: 'Self portrait, 1484',
    description:
      'Dürer was a famous draughtsman. One of his most iconic drawings was done at the age of 13 with silverpoint.'
  },
  {
    medium: 'Engravings',
    image: '/imgs/Albrecht_Dürer_-_Melencolia_I_.jpg',
    caption: 'Melancolia I, 1514',
    description:
      "Engravings both in metal and woodcuts were one of the artist's favourite techniques in his later years."
  },
  {
    medium: 'Watercolours',
    image: '/imgs/Albrecht_Dürer_-_Hare_1502.jpg',
    caption: 'Young Hare, 1502',
    description:
      ' During his travels trough Europe Dürer produced dozens of watercoulours, making him one of the first european landscape artists.'
  }
];

app.use(express.static('public'));
//app.use(express.static('views'));

app.get('/', (request, response) => {
  response.render('home');
});

app.get('/about', (request, response) => {
  response.render('about', works);
});

app.get('/works', (request, response) => {
  response.render('works');
});

app.get('/', (request, response) => {
  response.render('gallery');
});

app.get('*', (request, response) => {
  response.sendFile(__dirname + '/views/error.html');
});

app.listen(3000);
