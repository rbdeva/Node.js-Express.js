/*
                                        POST Method
    Post: Insert Data
    Ex: User order some items and we nned to add that order to the list

    Need to install one more tool which allolow us to test very faster

    We cannot just simply POST request from the browser

*/

const express = require('express');
const app = express();
let {people} = require('./data.js')

//static assets
app.use(express.static('./methods-public'))
// pare form data
app.use(express.urlencoded({extended: false}))

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

app.post('/login', (req, res) => {
    //console.log(req.body)
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('  Please Provide Credentials')
})


app.listen(5000, () => {
    console.log('Server listening on port 5000')
})
/*

In Express.js, the POST method is one of the HTTP methods used to send data to the server. It is commonly used when submitting form data, uploading files, or making API requests that involve creating new resources or modifying existing ones.

When a client sends a POST request to the server, it typically includes data in the request body. This data could be in various formats such as JSON, URL-encoded, or multipart form data.

Example 1: Handling Form Data in a POST Request
Let’s say you have a form where users submit their name and email. The client sends the form data to the server using a POST request.


<!-- HTML form (client-side) -->
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required><br>
  <button type="submit">Submit</button>
</form>

In the above HTML form, when the user submits the form, a POST request is sent to /submit with the form data.

Express Server Handling the POST Request:


const express = require('express');
const app = express();

// Middleware to parse form data (URL-encoded format)
app.use(express.urlencoded({ extended: true }));

// POST route to handle form submission
app.post('/submit', (req, res) => {
  const { name, email } = req.body; // Access form data from request body
  console.log(`Received name: ${name}, email: ${email}`);
  
  // Send a response to the client
  res.send('Form submitted successfully!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});




*/