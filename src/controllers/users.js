const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userController = require('../models/users');

userController.create(user, function (err, result) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send("status success", user);
    });

  module.exports = userController;

