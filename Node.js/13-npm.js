/*
  Topics: NPM, Packages, Npm commands, locally, globally, lodash and nodemon packages, uninstalling packages, package.json vs pakcage-lock.json
*/


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

  So, if you use .gitignore to push the code into without node_modules and if you want to pull again and run, then node_modules wont be there but we used const _ = require('loadash') in our code(we used lodash dependency in our code), so just type "npm install" so that npm will check for dependencies we used in our package.json file and install it


*/

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello people')

/*
What is devDependency in package.json?
In Node.js projects, dependencies are classified into two main categories:

dependencies: Packages required for your application to run in production (i.e., the core functionality).
devDependencies: Packages required only during development (i.e., tools and utilities that assist in the development process but are not needed when the app is running in production).

Key Difference Between dependencies and devDependencies
dependencies: Required to run the app in production and while our app is in use
devDependencies: Required only during development (e.g., tools, testing, etc.).

dev dependecies:
  npm i nodemon -D or --save-dev

In package.json, earler it was:
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  but we can change scripts obect like
     "scripts": {
      "start": "node app.js"
  }
      So now we can simple type "npm start" in terminal

  so here i added "dev": "nodemon app.js" in script{ } and ran "npm run dev", it prints
  [1, 2, 3, 4]
  hello world

  and now i just changed hello world to hello people and just saved it now the new changes will be seen in console without running it.

    Nodemon just restarts the app

    */

    /*

How to uninstall packages?
  npm uninstall packageName

Rather than installing packges globally it is always better to instal locallly or use npx.
  When you install a package globally, it's available across your entire system. This can lead to version conflicts if different projects require different versions of the same package.


npx 
  npx is a tool that comes with npm (Node.js Package Manager) version 5.2.0 and higher. It allows you to:

Execute Node.js packages without installing them globally.
Run one-off commands without polluting your global or local environment



Package.json:
  Key Features:
Lists dependencies and devDependencies (with version ranges).
Defines scripts for automating tasks (npm start, npm run test).
Contains project metadata like name, version, and description.
Needed for deployement

Package-lock-json:
  Key Features:
Automatically generated whenever npm install is run.
Records the exact version of each dependency and their transitive dependencies.
Captures the source (registry URLs) and integrity checks for security.
Not needed for deployement


Feature	                     package.json	                                             package-lock.json
Purpose	                    Describes your project and its dependencies.	           Locks the exact versions of dependencies installed.
Human-Readable	            Yes, meant to be edited manually.	                       Yes, but auto-generated by npm and not meant for manual edits.
Tracks Nested Dependencies:  No, only lists direct dependencies.	                   Yes, includes exact versions of all nested dependencies.
Version Range             	Allows version ranges (e.g., ^, ~).	                     Locks exact versions installed.
Required for Deployment	     Yes, must be present to install dependencies.	          Not mandatory but highly recommended for consistency.
Automatically Updated	        No, you need to manually update.	                   Yes, updated automatically during npm install.
  */


