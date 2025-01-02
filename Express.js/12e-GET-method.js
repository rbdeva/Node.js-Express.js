/*
                                                    GET Method

    GET method is by default method
    GET - Read Data

    Post: Insert Data

    Ex: User order some items and we nned to add that order to the list

    PUT: Update Data

    Delete: Delete Data
*/

const app = require('express')();

let {people} = require('./data.js')

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})


app.listen(5000, () => {
    console.log('Server listening on port 5000')
})