var ObjectID = require('mongodb').ObjectID
var db = require('../db-connect');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  username: req.body.name,
  telephone: req.body.telephone,
  password: req.body.password,
  email: req.body.email
});

User.create = function (user, cb) {
    db.get().collection('users').insert(user, function (err, result) {
      cb(err, result);
    })
  }

module.exports = mongoose.model('User', User);
