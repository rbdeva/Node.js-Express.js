/*
                              HTTP
HTTP Module - allow us to set p a web server  and handle HTTP requests and responses.

Why Use the HTTP Module?
The HTTP module is used to:

Create an HTTP server.
Handle incoming requests from clients (browsers, APIs, etc.).
Send responses back to the client.


//webservers keep on listening
*/

const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end("Welcome to req home page")
  }
  if(req.url ==='/about'){
    res.end('Here is the about req home page')
  }

  res.end(
    `<h1>Oops!</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href="/"> Back Home </a>
    `
  )


})

server.listen(5000);