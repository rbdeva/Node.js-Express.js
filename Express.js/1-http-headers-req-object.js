/*
Here, if you go to localhost:5000 it will print home page and if you go to localhost:5000/about or contact it gives home page
*/

/*
const http = require('http')
const server = http.createServer((req, res) => {
  console.log('user hit the server');
  res.end('home page')
})

server.listen(5000)

*/
/*

const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url)
  //res.writeHead(200, {'content-type': 'text/html'})
  res.writeHead(200, {'content-type': 'text/plain'})   
  res.write('<h1> Home Page </h1>')
  res.end()
})

server.listen(5000)
*/

const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url;
  if(url === '/'){
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1> Home Page </h1>')
    res.end()
}
else if(url === '/about'){
  res.writeHead(200, {'content-type': 'text/html'})
  res.write('<h1> About Page </h1>')
  res.end()
}
else{
  res.writeHead(404, {'content-type': 'text/html'})
  res.write('<h1> Page not found </h1>')
  res.end()
}

})

server.listen(5000)

