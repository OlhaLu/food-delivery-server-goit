const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello API');
})

app.get('/products', productsController.all);
app.post('/signup', usersController.create);




