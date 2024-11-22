const http = require('http');
const PORT = '3500'

// localhost:3500
http.createServer(function (req, res) {
    const url = req.url;
    console.log(url);

    switch (url) {
        case '/':
            console.log('main page');
            res.write('<h1>Main</h1>');
            break;
        case '/contact':
            console.log('contact page');
            res.write('<h1>Contact</h1>');
            break;

        default:
            console.log(404);
            res.write('<h1>404</h1>');
            break;
    }
    https://www.youtube.com/watch?v=4qetrC0ISXk&list=PLM7wFzahDYnHsnxdDD4EGKFkgD1rVcM47&index=6
 25:00

    res.end();
}).listen(PORT);