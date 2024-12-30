//GLOBALS - NO WINDOW Object, if tried  app will crash

//Global varaibles - We can access anywhere in the application

//__dirname - path to current directory
//__filename - filename
//require - which is function to use modules (CommonJs) //see next topics
//module - info about current module(file)//see next topics
//process - info about env where the program is being executed

/*process is very important 
When you run a Node.js app on your computer, you know its environment, such as the operating system, file system, or configuration.
However, when the app is deployed (e.g., on a cloud provider like DigitalOcean, AWS, or Heroku), you might not know the exact environment details unless you have tools like process.


console.log(process);

setInterval executes every 1 second here

setInterval(() => {
  console.log("hello")
}, 1000);

setTimeout executes after 3 seconds here

setTimeout(() => {
  console.log("After 3 seconds");
  }, 3000);


  You can type clear on terminal to remove preovoius commands(just went up)

  */

