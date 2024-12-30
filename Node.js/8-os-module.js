/*
Built-in Modules

OS
PATH
FS - File System
HTTP - To setup HTTP server

OS Module:
  Provides many usefull properties and methods for intercting with OS and the server
*/
const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method return system uptime in seconds 
console.log(`System up time is: ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMem: os.freemem()
}
console.log(currentOS);

//In node we can interact with file system but with js(browser) we cant


