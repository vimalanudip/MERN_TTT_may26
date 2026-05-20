var express = require('express');
const app = express();
var cors = require('cors');

app.use(cors({origin:'http://localhost:5173'}));

app.post("/adduser",(req,res)=>{
    console.log('rest api called');
    res.send({result:'Request received at '+new Date()});
});

app.listen(8081,()=>console.log('rest api running at port no 8081'));