/*
                  //    Modules
//Node uses CommonJS library, and in Node, every file is module (by default)
//Modules -  encapsulated code(only share minimum, means only share what we want)

          Built-in Modules

OS
PATH
FS - File System
HTTP - To setup HTTP server

*/

const names = require('./4-names.js');
const sayHi = require('./5-utils.js');
const data = require('./6-alternative.js');

console.log( require('./7-mind-grenade.js') );



//sayHi('Sony');
//sayHi(names.john);
//sayHi(names.peter);

