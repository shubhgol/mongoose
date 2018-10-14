const mongoose = require('mongoose');

 function dbconnect()
{
    // read connect syntax defination       
  return  mongoose.connect('mongodb://localhost/populate',{newUrlParser: true});

} 
module.exports = dbconnect;