/*
Here, do to blacking code(for loop), till the for loop executes all the other operations wont work
*/


const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('Home page')
  }
  else if(req.url === '/about'){
    //Blocking Code !!!
    for(let i = 0; i<1000; i++) {
        for(let j=0; j<1000; j++){
          console.log(`${i} ${j}`)
        }
    }

    res.end('About page')
  }
  else{
  res.end('error page')
  }


})

server.listen(5000, () => {
  console.log('server is listening on: 5000')
})

/*
Open http://localhost:5000/about in a browser.
The server will take a long time to respond because of the loops.
Simultaneously, try opening http://localhost:5000/ or any other route.
These requests will remain unprocessed until the blocking code finishes.
*/