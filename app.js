var http = require('http');

const server = http.createServer((request, response) => {
    const url = request.url;
    response.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        response.write('<html>');
        response.write('<head><title>Enter Message</title></head>');
        response.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="Enter Message"></form></body>');
        response.write('</html>');
        return response.end();
    }
    response.write('<html>');
    response.write('<head><title>My First Page</title></head>');
    response.write('<body><h1>Hello from my Node.js server</h1></body>');
    response.write('</html>');
    response.end();

});

server.listen(3000);