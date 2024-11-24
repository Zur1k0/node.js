const http = require('http');
const fs = require('fs');
const path = require('path');
const { encode } = require('punycode');
const PORT = '3500';

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.json': 'application/json',
    '.mp3': 'audio/mpeg',
    '.mp4': 'video/mp4',
    '.txt': 'text/plain',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.xls': 'application/vnd.ms-excel',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'woff': 'application/font-woff',
    'woff2': 'application/font-woff2',
    'ttf': 'application/font-ttf',
    'eot': 'application/vnd.ms-fontobject',
    'otf': 'application/font-otf',
    'swf': 'application/x-shockwave-flash',
    'wasm': 'application/wasm'
}

function staticFile(res, filePath, ext) {
    res.setHeader("Content-Type", mimeTypes[ext]);
    fs.readFile('./public' + filePath, {}, (error, data) => {
        if (error) {
            res.statuCode = 404;
            res.end();
        }
        res.end(data);
    })
}

// localhost:3500
http.createServer(function (req, res) {
    const url = req.url;
    console.log(url);

    switch (url) {
        case '/':
            console.log('main page');
            res.write('<h1>Main</h1>');
            res.end();
            break;

        case '/contact':
            console.log('contact page');
            staticFile(res, '/contact.html', '.html')
            break;

        default:
            const extname = String(path.extname(url)).toLowerCase();
            if (extname in mimeTypes) {
                staticFile(res, url, extname);
            } else {
                res.statusCode = 404;
                res.end();
            }
    }



}).listen(PORT);