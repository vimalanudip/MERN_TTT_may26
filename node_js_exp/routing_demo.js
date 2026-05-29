var http=require('http');
http.createServer(function(req,res){
    console.log(req.url);
    if(req.url==="/")
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<a href="/">Home</a> | <a href="/aboutus">Aboutus</a>| <a href="/contactus">Contactus</a>');
        res.write("<h1>This is home page</h1>");
    }
    else if (req.url==="/aboutus")
            {
                res.writeHead(200,{'content-type':'text/html'});
                res.write('<a href="/">Home</a> | <a href="/aboutus">Aboutus</a>| <a href="/contactus">Contactus</a>');
                res.write("<h1>Aboutus </h1>");
                res.write("<h2>Learning MERN</h2>"); 
            }
            else if(req.url==="/contactus")
            {
                 res.writeHead(200,{'content-type':"text/html"}) ;
                 res.write('<a href="/">Home</a> | <a href="/aboutus">Aboutus</a>| <a href="/contactus">Contactus</a>');   
                  res.write('<form action="/" method="get">');
                  res.write('<input type="text" name="urname" placeholder="Enter your full name" />');
                  res.write('<input type="email" name="email" placeholder="Enter your Email" />');
                  res.write('<input type="number" name="mobile" placeholder="Enter your mobile number" />');  
                    res.write('<input type="submit">');
            }
            else    
            {
                res.writeHead(404,{'content-type':"text/html"})
                res.write("no page found");
            }
  res.end("");
}).listen(8080,()=>console.log("server running at port no 8080"));