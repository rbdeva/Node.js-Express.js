/*
  npm install express --save

In earlier node versions, if u didnt use -save then the package wont saved to package.json so if someone is clone ypour repositry then they dont have did not have the reference to install express
*/



// cost app = require('express')(); or

const express = require('express');
const app = express()

app.get('/', (req, res) => {
  console.log('User hit home page')
  res.status(200).send('Home page')
})

app.get('/about', (req, res) => {
  console.log('user hit about page')
  res.status(200).send('About page')
})

// app.all(path, callback)
app.all('*', (req, res) => {
  res.status(404).send('<h1> resourse not found</h1>')
})


app.listen(5000, () =>{
  console.log("Server is listening on port 5000")
})


//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

/*
In Express.js, the .all() method is used to handle all HTTP methods (e.g., GET, POST, PUT, DELETE, etc.) for a specific route. It matches any HTTP request method and can be useful for defining middleware or route logic that applies regardless of the request method.

*/



