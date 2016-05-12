'use strict';

var mongoose = require('mongoose'),
    db = mongoose.connection;

mongoose.connect('mongodb://localhost/chaordic');

db.on('error', function(){
  console.log('Database: error.');
}).once('open', function() {
  console.log('Database: success.');
});