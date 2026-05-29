var express = require('express');
const app = express();
var ejs = require('ejs');
const db_conn = require('./db_conn.js');
 
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true,limit:'10mb'}));


app.get('/',(req,res)=>{
    res.send("Home page for ejs express and mysql");
})
app.get("/adduser",(req,res)=>{
    res.render('adduser');
});
app.post("/adduser_submit",(req,res)=>{
 const {fname,lname,dob,gender } = req.body;
  db_conn.query("insert into user (fname,lname,dob,gender) values (?,?,?,?)",[fname,lname,dob,gender],function(err,result){
        if(err)
            throw err;

        if(result.insertId>0)
            res.send("<h1>One record inserted with id :- "+result.insertId+"</h1>");
  }); //end of query method

}); // end of app.post method

//db_conn.query("insert into tablename colname (col1,col2,col3..) value (?,?,?,?...)",[var1,var2,var3,var4....],function(err,result){})

app.get('/listuser',(req,res)=>{
   db_conn.query('select * from user',function(err,result){
        if(err)
            throw err;
        else
        {
            //console.log(result);
          // return res.send("<h2>result printed on console</h2>");
          res.render('userlist_view',{data:result});
        }
   });

});
app.listen(8080,()=>console.log("server running at port no 8080"));

/*create a folder name with 
fullstackproject
 frontend :- inside backed install reactjs, in react kindly install the react-router-dom 

 backend :- install express nodemon mysql2 cors  */
