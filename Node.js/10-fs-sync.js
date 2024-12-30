/*
                      FS Module

The fs (File System) module in Node.js provides two primary ways to work with file operations: Synchronous and Asynchronous.

1. Synchronous File System Methods
These methods block the execution of code until the file operation is complete.
They are simple to use but not suitable for performance-critical applications, as they can block the event loop and delay other tasks.

2. Asynchronous File System Methods
These methods perform file operations without blocking the execution of other code.
They use callbacks, promises, or async/await to handle the completion of operationss


*/
/*
const {readFileSync} = require('fs');
//or
const fs = require('fs');
*/

/*
Read Files as Strings:

When you use 'utf8', Node.js automatically converts the contents of the file (which is usually stored as raw bytes) into a string.
Without specifying 'utf8', Node.js returns the data as a Buffer (a raw byte array), which is not immediately readable as a string.
*/

const {readFileSync, writeFileSync} = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt', 'utf8');


/*
If file is not there, node will create one, if file is already there, then, node will rewrite .

When you use { flag: 'a' }, it opens the file in append mode, which means the new data will be added to the end of the file without modifying the existing content.
*/
writeFileSync(
  './content/result-sync.txt', 
  `Here is the result: ${first}, ${second}`,
  {flag: 'a'}
);
console.log('done with this task');
console.log('starting with the next one');

