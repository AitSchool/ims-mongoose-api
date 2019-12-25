var mongoose = require('./mongoose.js'),
  Schema = mongoose.Schema;

var articleSchema = new Schema({          
  name : { type: String },
  description : { type: String },
  content : { type: String },
  created_at : { type: Date, default: Date.now },
  updated_at : { type: Date, default: Date.now },
  category_id: { type: Schema.Types.ObjectId, ref: 'category' }
},{
  collection: 'article'
});

module.exports = mongoose.model('article',articleSchema);