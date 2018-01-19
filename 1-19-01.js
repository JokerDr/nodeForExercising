var http = require('http');
http.createServer(function(req,res){
res.writeHead(200,{
    'content-Type':'text/html'
});
res.write('<h1>NodeJs<h1>');
res.end('<p>hello world!</p>');

}).listen(3000);
console.log("http server is listening at port 3000");
