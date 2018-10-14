
const express = require('express');
const connection = require('./connection');
const model = require('./model')
const app = express();
connection()
.then((result) => {
app.listen(3000,()=> console.log('app is listening...'));
// we can call schema statics method without creating instance of schema  
console.log(model.findUser());  
// we can't call schema instance method without creating instance of schema 
// console.log(model.lastName());
}).catch((err) => {
    console.log(err);
});
app.get('/',(req,res)=>{
const newUser =  model({
    UserId:  195,
    name: 'Saurav Kumar',
    address:   'Gorakhpur'
   
})
// we can pass callback inside save()
console.log(newUser.lastName());



})
// Model.deleteMany()
// Model.deleteOne()
// Model.find()
// Model.findById()
// Model.findByIdAndDelete()
// Model.findByIdAndRemove()
// Model.findByIdAndUpdate()
// Model.findOne(condition,projection,callback?:)
// Model.findOneAndDelete()
// Model.findOneAndRemove()
// Model.findOneAndUpdate()
// Model.replaceOne()
// Model.updateMany()
// Model.updateOne()