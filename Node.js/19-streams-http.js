/*
const {writeFileSync} = require('fs')
for(let i = 0; i< 100000; i++ ){
  writeFileSync('./content/big.txt', `Hello World ${i}\n`, {flag: 'a'})
}
  */
 /*

var http = require('http')
var fs =  require('fs')

http.createServer(function (req, res) {
  const text = fs.readFileSync('./content/big.txt', 'utf8')
  res.end(text)
})
  .listen(5000)

  */

/*
fileStream.pipe() is a method used in Node.js to transfer data from a readable stream to a writable stream efficiently. It is particularly useful for handling file operations and HTTP responses when dealing with large amounts of data.

How It Works:
Reads chunks of data from the readable stream.
Writes those chunks to the writable stream.
Automatically manages the flow, ensuring that the writable stream isn't overwhelmed.
*/
var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
  //const text = fs.readFileSync('./content/big.txt', 'utf8')
  //res.end(text)
  const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
  fileStream.on('open', () => {
    fileStream.pipe(res)

  })
  fileStream.on('error', () => {
    res.end(error)
  })
})
  .listen(5000)


