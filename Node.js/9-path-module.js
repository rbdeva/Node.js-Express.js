/*
Path module

The path module is a built-in Node.js module for handling and manipulating file paths.
*/
const path = require('path');
console.log(path.sep); //Winows: \. Unix: /

/*
The path.join() method combines multiple path segments into a single normalized path string. Normalization ensures that:

The path uses the correct separator for the current operating system (/ for Unix, \ for Windows).
Unnecessary slashes or . (current directory) are removed.
It handles .. (parent directory) by navigating correctly.

*/
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

/*
The path.basename() method in Node.js is used to extract the base name (the last part of the path, typically the file name) from a given path.
*/
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);

const absolute1 = path.resolve(__filename, 'content', 'subfolder', 'test.txt');
console.log(absolute1);

