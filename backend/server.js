var express = require('express');
const app = express();
var cors = require('cors');
var db_conn= require('./db_conn.js');

app.use(cors({origin:'http://localhost:5173'}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/adduser",(req,res)=>{

    const {fname,lname,dob,gender} = req.body.userdata;
    
    db_conn.query("insert into user (fname,lname,dob,gender)values (?,?,?,?)",[fname,lname,dob,gender],function(err,result){
            if(err)
                res.send({error:"not able to add user try again"});
            else
                {
                   // console.log(result);
                   // console.log(result.insertId);
                    if(result.insertId>0)
                    res.send({result:'New USER added with id:-  '+result.insertId});
                }
    }); // end of query method
}); // end of routing method for adduser route

app.get("/getalluserlist",function(req,res){
    db_conn.query("select * from user",function(err,result){
            if(err)
                   return res.send({msg:"Error on server "});
             else if(result.length>0)
                   return res.send({userResult:result,msg:""});
                    else
                      return  res.send({msg:"no data found"}); 
    }); // db_conn.query ends here
}); // getalluserlist ends here

app.listen(8081,()=>console.log('rest api running at port no 8081'));