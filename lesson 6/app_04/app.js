const http = require('http');
const fs = require('fs');
const PORT = '3500'

// localhost:3500
http.createServer(function (req, res) {
    const url = req.url;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    console.log(url);

    switch (url) {
        case '/':
            console.log('main page');
            res.write('<h1>Main</h1>');
            break;
        case '/contact':
            console.log('contact page');
            let data = fs.readFileSync('./contact.html', { encoding: 'utf8', flag: 'r' });
            res.write(data)
            break;

        default:
            console.log(404);
            res.write('<h1>404</h1>');
            break;
    }

    res.end();
}).listen(PORT);