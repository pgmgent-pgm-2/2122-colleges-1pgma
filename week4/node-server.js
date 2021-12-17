const httpModule = require('http');

const server = httpModule.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello!');
    // CSS Watchen
    // Refresh browser
});

server.listen('8080', 'localhost', () => {
    console.log('De server is running!'); // Ctrl + C om de server te stoppen.
})