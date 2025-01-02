const express = require('express');
const path = require('path');
const app = express()

//setup static and middleware
app.use(express.static('./public'))
//Here, we just include index.html in public folder becuase, Express will look for index.html first when you visit the root URL (/). If the index.html file exists in the specified public folder, it will be served automatically.

// app.get('/', (req, res) => {
// res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//adding to static assets
// server side  rendering - SSR
// })

app.all('*', (Req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})