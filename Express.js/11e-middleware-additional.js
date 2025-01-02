//Types of Middlewares - our own , built-in middlewares, third-party middle wares

//Express provides some in built middleware functions
//Ex: 
// app.use(express.static('./public))
//third party midlewares such as morgan
const express = require('express');
const app = express();
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

//Here I only want authoriized users to see /api/items. so  
//app.use([logger, authorize])

app.use(morgan('tiny'))

app.get('/', (req, res) => {

  res.send('Home')
})

app.get('/about', (req, res) => {
   res.send('About')
 })

 app.get('/api/products', (req, res) => {

   res.send('Products')
 })
 
 app.get('/api/items', [logger, authorize], (req, res) => {
   console.log(req.user
      
   )
    res.send('Items')
  })


app.listen(5000, () => {
  console.log("Server listening on port 5000")
})
