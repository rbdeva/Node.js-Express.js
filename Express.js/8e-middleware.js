/*
                Middleware

  Middleares are the functions that execute during therequest to the server.
  Eahch middleware fuction has access to request and response bjects

  When you work with midleare, You must pass tt the next middleware unless you are terminating the cycle by sending back the response
*/

const express = require('express');
const app = express();
// Earlier: req => res
// But, req => middleware  => res

const logger = (req, res, next) => {
   const method = req.method;
   const url = req.url;
   const time = new Date().getFullYear();
   console.log(method, url, time)
   //res.send('Test')
   next();
}

app.get('/', logger, (req, res) => {

  res.send('Home')
})

app.get('/about', logger, (req, res) => {
   res.send('About')
 })


app.listen(5000, () => {
  console.log("Server listening on port 5000")
})