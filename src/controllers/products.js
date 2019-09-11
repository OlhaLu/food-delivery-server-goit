const express = require('express');
const app = express();

const productsController = require('../models/products');

module.exports = function(req, res) {
  productsController.all(function(err, docs) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(docs);
    });
  };

  module.exports = productsController;