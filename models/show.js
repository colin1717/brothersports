var mongoose = require('mongoose');

var ShowSchema = new mongoose.Schema({
  date: String,
  venue: String,
  memo: String,
  updated_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Show', ShowSchema);
