'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var User = mongoose.model('User', new Schema({
  id: { type: String, unique: true }
}));

module.exports = User;