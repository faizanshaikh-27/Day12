const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {      //The createServer() method of http creates a new HTTP server and returns it.
  res.statusCode = 200; // we set the statusCode property to 200, to indicate a successful response.
  res.setHeader('Content-Type', 'text/plain'); // We set the Content-Type header:

  res.end('Hello World\n');
});

server.listen(port, () => {
  console.log(`Server running at ${port}/`);
});