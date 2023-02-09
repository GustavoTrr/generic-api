const express = require('express');
const app = express();

app.get('/minhafesta/convidados', (req, res) => {
  const guests = [
    {
      id: 1,
      name: 'John Doe',
      cpf: '12345678901',
      foods: ['Pizza', 'Hamburger', 'Salad']
    },
    {
      id: 2,
      name: 'Jane Doe',
      cpf: '10987654321',
      foods: ['Steak', 'Fish', 'Fruit']
    }
  ];

  res.json(guests);
});

app.listen(3000, () => {
  console.log('JSON server listening on port 3000');
});