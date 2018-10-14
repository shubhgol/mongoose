var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

var postSchema = Schema({
  _id: mongoose.Schema.ObjectId,
  content:String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

 var Story = mongoose.model('Post', postSchema);
 var Person = mongoose.model('User', personSchema);
module.exports = {Story,Person}