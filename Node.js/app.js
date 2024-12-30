/*
                    NPM - Node Package Manager
NPM enables us to do three things
  1. Reuse our own code in other projects
  2. Use code written by other developers
  3. Share out own solutions with other developers

In NPM, reusable code is referred to as a package.

A package is a collection of files (usually JavaScript code) bundled together to perform a specific set of tasks. Each package includes:

Code that solves a problem or provides functionality.
A package.json file that contains metadata about the package, such as:
Name, version, description.
List of dependencies.
Scripts for automation.


Theres no quality control in npm, anyone can publish anything.
  Better to use on weekly download number.

                                NPM Commands
    When we install node, we also installed NPM and because of that we have access to npm global command

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)


// package.json - manifest file (stores important info about project/package)
// 3 ways to create package.json: 
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

Why it is important to use package.json: (In simple terms, It  provides information about our project)
  1. It provides details about your project like name, version, author, description, and license.
  2. Lists all the dependencies (packages your project relies on) and devDependencies (only needed for development, like testing tools).
  etc.,
  node_modules folder  has the all the dependencies we installed for our project.



*/

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);