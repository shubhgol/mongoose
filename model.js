const mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var blogSchema = new Schema({
    UserId:  Number,
    name: String,
    address:   String,
   
  },{collection:'User'});
  blogSchema.statics.findUser = function()
  {
      return 'shubham';
  }
  blogSchema.methods.lastName = function()
  {
      return 'Madheshiya';
  }
//   blogSchema.statics.createUser = async  function()
//   {

//   }
  module.exports = mongoose.model('user',blogSchema);
  