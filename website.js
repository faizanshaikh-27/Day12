const http = require('http');
const fs = require('fs');
const port = process.env.port || 3000; // 3000 is the local host

const server = http.createServer((req, res) => {
    
    res.setHeader('content-Type', 'text/html'); //request will be produced as HTML
    console.log(req);
    // using if statement
    if (req.url == '/') {
        res.statusCode = 200; //to check the status of the server
        res.end('<h1>Setting an HTML page to display the server response</h1>');
    }
    else if(req.url == '/about') {
        res.statusCode = 200; //to check the status of the server
        res.end('<h1>This is about the http module</h1>');
    }
    else if(req.url == '/hello') {
        res.statusCode = 200; //to check the status of the server
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
    }
else{
    res.statusCode = 404; 
    res.end('<h1> Error 404 </h1> <p> Page not Found </p>');
}
});

server.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
