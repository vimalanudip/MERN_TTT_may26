var mysql= require('mysql2');
var conn =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'mern_ttt'
});
conn.connect(function(err){
    if(err)
        throw err;

    console.log("database is connected.");
});

module.exports= conn;
