const http = require('http');
const { readFileSync } = require('fs');

//get all files
const homepage = readFileSync('./index.html');
const styles = readFileSync('./style.css');

const server = http.createServer((req, res) => {
    const url = req.url;

    //home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homepage);
        res.end();
    }
    //style page
    else if (url === '/style.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(styles);
        res.end();
    }
    //error
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>Page not found</h1>');
        res.end();
    }
});

server.listen(5000, () => {
    console.log(`server is listening on port: 5000`);
});
        