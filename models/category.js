var mongoose = require('./mongoose.js'),
  Schema = mongoose.Schema;

var categorySchema = new Schema({          
  name : { type: String }
},{
  collection: 'category'
});

module.exports = mongoose.model('category',categorySchema);