// sample model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Account = new Schema({
  username: String,
  email: String,
  time: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Account', Account);
