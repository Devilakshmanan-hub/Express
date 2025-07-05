const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const urlencodedparser = bodyparser.urlencoded();
 
// app.get('/', function(req, res) {
//   res.send("This is the Homepage");
// });
// app.get('/contact', function(req, res) {
//   res.send("This is the contact Js");
// });
// app.get('/profile:id', function(req, res) {
//   res.send("This is the profilepage:" +req.params.id);
// });

// app.listen(3000);
app.use('/stuff',express.static('stuff'));
app.set('view engine','ejs');
app.get('/index', function(req, res) {
  console.log( req.query);
  res.render('Index.ejs',{qs: req.query});
 });
 app.get('/contact', function(req, res) {
   res.render('Contact.ejs' );
 });
 app.post('/contact',urlencodedparser,function(req,res){
   console.log(req.body);
   res.render('Contactupdate.ejs',{Data:req.body});
 });
 app.get('/Profile',function(req,res){
  const data = { age:30, 
    Designation:"Frontend developer", 
    Hobbies:["Dancing", "Singing", "Cooking", "Drawing"]};
  res.render('Profile.ejs',{person:req.params.name,data:data} );
 });
 app.listen(3000);