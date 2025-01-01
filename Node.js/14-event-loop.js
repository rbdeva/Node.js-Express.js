/*
                                            Event Loop

    JavaScript runs line by line 
      Ex: 
        for (let i = 1; i <= 10; i++) {
            console.log(i);
          }
          console.log("Ended");
      So it takes time to process the next steps  


  https://www.course-api.com/slides.html

  Visit for more examples


  Event Loop:
    What event loops does is it registers the callback, only when the operation is complete it executes it

Event Loop in Node.js: Real-Life Example
The event loop is the mechanism that allows Node.js to handle non-blocking I/O operations. It ensures that tasks like reading files, making API requests, or handling timers don’t block the execution of other parts of your program.

Real-Life Analogy: Coffee Shop
Imagine a coffee shop with the following setup:

Barista (Single-threaded): The barista takes orders, prepares coffee, and serves customers. The barista can only work on one task at a time.
Order Queue (Task Queue): Customers place orders, which go into a queue. The barista processes them one by one.
Special Machines (Async Tasks): There are machines for tasks like grinding coffee or brewing espresso. The barista starts the machine and doesn’t wait next to it—moves on to take the next order.
How It Works:
A customer places an order for coffee.

The barista (Node.js) takes the order and sends it to the coffee machine (an async operation, like reading a file).
While the machine is working, the barista takes the next customer's order.

The barista doesn’t stand idle waiting for the machine to finish.
When the machine finishes making the coffee, it notifies the barista (callback).

The barista picks up the coffee and serves it to the customer.
The barista continues this process, never blocking other customers even if the machines take time.

EX:
console.log('Barista: Taking order for Customer 1');

setTimeout(() => {
  console.log('Barista: Serving coffee to Customer 1');
}, 3000); // Simulates the coffee machine taking time

console.log('Barista: Taking order for Customer 2');

setTimeout(() => {
  console.log('Barista: Serving coffee to Customer 2');
}, 2000);

console.log('Barista: Taking order for Customer 3');

output:

Barista: Taking order for Customer 1
Barista: Taking order for Customer 2
Barista: Taking order for Customer 3
Barista: Serving coffee to Customer 2
Barista: Serving coffee to Customer 1

Event Loop:

Detailed Explanation:
Synchronous Tasks:

These are executed immediately, in the order they appear.
Examples: console.log(), math calculations, etc.
Asynchronous Tasks:

These are sent to the background (e.g., timers, file reads, HTTP requests).
Once completed, they place their callbacks in the callback queue.
Event Loop:

The event loop processes tasks in the callback queue only after all synchronous tasks in the current execution context are complete




*/
/*

const  {readFile } = require('fs');

console.log('started')

readFile('./content/first.txt', 'utf8', (err, result) => {
  if(err){
    console.log(err)
    return;
  }
  console.log(result)
  console.log('completed first tast')
})
console.log('next task')

*/

/*

console.log('first')
setTimeout(() => {
  console.log('second')
}, 1000)
setTimeout(() => {
  console.log('forth')
}, 0)
console.log('third');

*/
/*
setInterval(() => {
  console.log('First')
}, 1000)
console.log("Second")
*/

/* Here, if we execute using node app.js then this is still alive even after complete its task because listen is asynchronous


const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello World')
})

server.listen(5000, () => {
  console.log('server listening to port: 5000')
})

*/
