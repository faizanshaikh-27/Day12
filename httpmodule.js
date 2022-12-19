const http = require('http');
const port = process.env.port || 3000; // 3000 is the local host

const server = http.createServer((req, res) => {
    console.log(req);
        res.statusCode = 200; //to check the status of the server
        res.setHeader('content-Type', 'text/html'); //request will be produced as HTML
        res.end('<h1>Setting an HTML page to display the server response</h1>');
});

server.listen( port, () => {
    console.log(`Server is listening at port ${port}`);
});
