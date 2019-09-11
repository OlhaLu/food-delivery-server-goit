var ObjectID = require('mongodb').ObjectID
var db = require('../db-connect');

exports.all = function (cb) {
    db.get().collection('products').find().toArray(function (err, docs) {
      cb(err, docs);
    })
  }



