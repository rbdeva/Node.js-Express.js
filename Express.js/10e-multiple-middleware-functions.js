const express = require('express');
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')

//In the below array [autghorize, logger] authorize will execute first and then logger if [logger, authoriize] then logger will execute first and then authorize
app.use([logger, authorize])


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
   console.log(req.user
      
   )
    res.send('Items')
  })


app.listen(5000, () => {
  console.log("Server listening on port 5000")
})
