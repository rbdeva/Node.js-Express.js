const express = require('express');
const app = express()

const {products} = require('./data.js')

app.get('/', (req, res) => {
  res.send('<h1> Home Page </h1> <a href = "/api/products">Products<a> ')
})
//infor about ony id, name and image
app.get('/api/products', (req, res) => {
   const newProduct = products.map((product) => {
      const {id, name, image} = product;
      return {id, name, image}
   })
   res.json(newProduct)
})
/*
//info about singe product
app.get('/api/products/1', (req, res) => {
   const singleProduct = products.find((product) =>  product.id === 1 )
   res.json(singleProduct)
})
*/
/*
//Naming is upto you: productID
//console.log(req.params) - if we typed http://localhost:5000/api/products/2 answer will be {productID: '2'}
                        // if we typed http://localhost:5000/api/products/1 answer will sbe {productID: '1'}

app.get('/api/products/:productID', (req, res) => {
   // console.log(req)
   // console.log(req.params)
   const singleProduct = products.find((product) => product.id === 1)
   res.json(singleProduct)
})
   */
  app.get('/api/products/:productID', (req, res) => {
   const {productID} = req.params;

   const singleProduct = products.find((product) => product.id === Number(productID))
   if(!singleProduct){
      return res.status(404).send('Product does not exist')
   }
   // console.log(singleProduct)
   return res.json(singleProduct)
  })

  //complex
  app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
   console.log(req.params)
   res.send('Hello World')
  })

app.listen(5000, () => {
  console.log('Server listening on port 5000');
  
})

/*
const { id, name, image } = products;

Without destructuring, you’d need to write:
const id = products.id;
const name = products.name;
const image = products.image;

*/