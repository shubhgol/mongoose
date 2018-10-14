const mongoose = require('mongoose')
const express = require('express');
const connection = require('./connection');
const model = require('./populate')
const app = express();
connection()
.then((result) => {
app.listen(3000,()=> console.log('app is listening...'));
// console.log(Person);

}).catch((err) => {
    console.log(err);
});
app.get('/',(req,res)=>{
    var author = new model.Person({
        _id: new mongoose.Types.ObjectId(),
        name: 'Shubham kumar',
        age: 23,
        posts: mongoose.Types. ObjectId()
      });
      
      author.save(function (err) {
        if (err) return console.error(err);
      
        let story1 = new model.Story({
          _id: author.posts,
          content:'hello i am  full stack developer', 
          author: author._id ,   // assign the _id from the person
        });
      
        story1.save(function (err) {
          if (err) return console.error(err);
          // thats it!

        });
      });
      model.Person.
  find({}).
  populate('posts','content').
  exec(function (err, story) {
    if (err)  console.error(err);
    res.send(story)
    // prints "The author is Ian Fleming"
  });
     
})
