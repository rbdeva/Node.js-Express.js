/*
                                                      STREAMS

Writeable - Used to write data sequentially
Readable - Used to read data sequentially
Duplex - Used to both read and write data sequentially
Transform - data can be modified when writing or reading

*/

/*
const {writeFileSync} = require('fs')
for(let i=0; i<10000; i++){
  writeFileSync('./content/big.txt', `hello world ${i}\n`,{ flag: 'a' })
}
*/
  
/*
When the file big.txt is large, the stream will divide it into smaller chunks and emit them one by one.

Ex:
This is the first line of the file.
This is the second line.
This is the third line.
This is the fourth line.
This is the fifth line.

EX:
  ---- New Chunk ----
This is the first line of the file.
This is the second line.

---- New Chunk ----
This is the third line.
This is the fourth line.

---- New Chunk ----
This is the fifth line.

File reading completed.

*/
//Here we rading the data in chunks
const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', 
  {highWaterMark: 90000, 
    encoding: 'utf8'})

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream - createReadStream('./content/big.txt', {highWaterMark: 90000})
//const stream = createReadStream('./content/big.txt', {encoding: 'utf8'})

stream.on('data', (result) => {
console.log(result)
})

stream.on('error', (err) => {
  console.log(err)
})





















/*
Streams are a built-in feature in Node.js that allow handling of data that is being transferred piece by piece (or chunks) rather than waiting for the entire data to be available. This is especially useful for processing large files or real-time data like video/audio streaming.

Streams make it possible to start processing parts of the data without loading the entire data into memory.

Types of Streams
Readable Streams: Used to read data (e.g., reading files or incoming data).
Example: fs.createReadStream()
Writable Streams: Used to write data (e.g., writing to a file or sending data over a network).
Example: fs.createWriteStream()
Duplex Streams: Can be both readable and writable (e.g., TCP sockets).
Example: net.Socket()
Transform Streams: Duplex streams that can modify or transform data as it is read or written (e.g., compressing data).
Example: zlib.createGzip()
Why Streams Are Useful
Memory Efficiency: Streams process data in chunks rather than loading it all into memory.
Speed: Start processing data as soon as the first chunk is available.
Scalability: Handle large amounts of data efficiently.
Real-Life Example of Streams
Imagine watching a video online:

Without Streams: You need to download the entire video before you can start watching it.
With Streams: You can start watching the video as soon as the first part (chunk) is loaded.
*/