const http = require('http');

http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.end('Hello World, Welcome to WeJapa Internships');
    } else if (req.method === 'POST' && req.url === '/') {
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            res.end(`Hello ${body}, Welcome to WeJapa Internships`);
        })
    } else {
        res.statusCode = 400;
        res.end()
    }
}).listen(3000, () => console.log('App is live and listening on port 3000'));
