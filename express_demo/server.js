var express = require('express');
const app = express();
var path = require('path');
var ejs = require('ejs');

app.use(express.urlencoded({extended:true, limit:'2mb'}));
app.use(express.static('public'));

app.set('view engine','ejs');

app.get("/",function(req,res){
    res.send("Hello expressjs home page ");
});
app.get("/aboutus",function(req,res){
    res.send("<h2>Aboutus page of our website</h2>");

});
app.get("/jsondemo",(req,res)=>{
    res.send({'msg':"Hello i am json demo"});

});
app.get("/input_get",(req,res)=>{
   var form_code = '<div style="width:500px;margin:0 auto"><form action="/input_submit">';
      form_code +='<p>Enter your name <input type="text" name="fullname" /></p>';

    form_code +='<p>Enter your email <input type="email" name="email" /></p>';
      form_code+='<p><input type="submit" value="send"></p></form></div>';
    res.send(form_code);

});
app.get("/input_submit",(req,res)=>{
    const full_name = req.query['fullname'];
    const email = req.query['email'];
   res.send("data :- full name :-  "+full_name + "<br />Email "+email);

});

app.get("/post_form",(req,res)=>{
 var form_code = '<div style="width:500px;margin:0 auto"><form action="/postform_submit" method="post">';
      form_code +='<p>Enter your email <input type="email" name="email" /></p>';

    form_code +='<p>Enter your Password <input type="password" name="pass" /></p>';
      form_code+='<p><input type="submit" value="send"></p></form></div>';
    res.send(form_code);
});

app.post('/postform_submit',(req,res)=>{
    const email = req.body.email;
    const pwd = req.body.pass;
        res.send("Form submitted using post method <br> email:- "+email+"<br> password :- "+pwd);
});
app.get("/html_file_demo",(req,res)=>{
  //res.send(__dirname + "<br />"+ __filename);
  res.sendFile(  path.join(__dirname,   "/public/form.html"));
});


app.get('/ejs_home',(req,res)=>{
  res.render('ejshome',{msg:"this is MERN TTT"});

})
app.listen(8080,()=>console.log("express server is running at port no 8080"));