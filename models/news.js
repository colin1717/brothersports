var mongoose = require('mongoose');

var NewsSchema = new mongoose.Schema({
  title: String,
  post: String
})

module.exports = mongoose.model('News', NewsSchema);
