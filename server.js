//import http
const http = require("http");

//create server 
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'html');
    res.write("<!DOCTYPE html>");
    res.write(`<html lang ='en'>`);
    res.write(`<head>`);
    res.write(`<meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Hello World!</title>
                </head>
                <body>
                    <h1>Hello there!</h1>
                </body>
            </html>`);
    res.end(); 
});

//create Port 
const port = 5000; 

//listen 
server.listen(port, () => console.log('Server is listening on port', port));