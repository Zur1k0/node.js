const http = require('http');

// localhost:3500
http.createServer(function(req, res){
    console.log(req.url);
    console.log(req.method);
    console.log('server work');
    res.setHeader("Content-Type", "text/html; charset=utf-8;");
    res.write('<h2>Hello world</h2>');
    res.write('<p>Hello world</p>');

    res.end();
}).listen(3500);