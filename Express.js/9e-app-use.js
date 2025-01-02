/*
                Middleware

Make code clean - write logger in separate file

we cant give logger to every routes, beacuse what if we have 200 routes?
 
So we can app.use(logger)


*/

const express = require('express');
const app = express();
const logger = require('./logger')
// Earlier: req => res
// But, req => middleware  => res

// app.use(logger) Instead of one parameter we can also include one more parameter called path
//Here path is important because This setup means that the logger middleware will only be applied to routes that start with /api, so /api/products and /api/items in this case

app.use('/api', logger)
//app.use(logger)


app.get('/', (req, res) => {

  res.send('Home')
})

app.get('/about', (req, res) => {
   res.send('About')
 })

 app.get('/api/products', (req, res) => {

   res.send('Products')
 })
 
 app.get('/api/items', (req, res) => {
    res.send('Items')
  })


app.listen(5000, () => {
  console.log("Server listening on port 5000")
})