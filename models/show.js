var mongoose = require('mongoose');

var ShowSchema = new mongoose.Schema({
  date: Date,
  venue: String,
  memo: String,
  flyer: String,
  updated_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Show', ShowSchema);
