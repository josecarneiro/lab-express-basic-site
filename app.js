const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.render('index', {
    title: 'Welcome to this website about Elephants',
    message: "What didn't you know about elephants? Well your about to find out"
  });
});

app.get('/facts', (request, response) => {
  const data = {
    title: 'This is the facts page for elephants',
    fact: [
      {
        title: 'Fact One',
        text:
          'There are three different species of elephant – the African Savannah elephant, the African Forest elephant and the Asian elephant. Elephants are known for their large ears, tusks made of ivory and their trunks – which are actually a fusion of their nose and upper lip'
      },
      {
        title: 'Fact Two',
        text:
          'Elephants are the world’s largest land animal! Male African elephants can reach 3m tall and weigh between 4,000 -7,500kg. Asian elephants are slightly smaller, reaching 2.7m tall and weighing 3,000– 6,000kg'
      },
      {
        title: 'Fact Three',
        text:
          'There’s an easy way to tell the African elephants apart from their Asian cousins – their ears! African elephants have large ears shaped like the continent of Africa! Asian elephants’ ears are smaller and shaped like India.'
      },
      {
        title: 'Fact Four',
        text:
          'You can tell a lot about an elephant by looking at their tusks! Elephant tusks never stop growing, so enormous tusks can be a sign of an old elephant. Both male and female African elephants grow tusks, but only male Asian elephants grow them. A tusk-less adult elephant is likely to be a female Asian elephant.'
      },
      {
        title: 'Fact Five',
        text:
          ' Until recently, African Forest elephants were thought to be a subspecies of the African elephant, but new research discovered that they are actually a separate species entirely. These elephants live in the tropical forests of Africa’s Congo Basin. They have straighter tusks and more rounded ears than Savannah elephants.'
      }
    ]
  };
  response.render('facts', data);
});

app.get('/gallery', (request, response) => {
  const data = {
    title: 'This is the gallery page for elephants'
  };
  response.render('gallery', data);
});

app.listen(3000);
