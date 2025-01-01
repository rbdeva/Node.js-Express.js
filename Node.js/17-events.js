/*
                                                EVENTS
  Event-Driven Programming
  Used Heavily in Node.js

  Event-driven programming is a programming paradigm where the flow of the program is determined by events, such as user actions, sensor outputs, or messages from other programs. It is a key concept in asynchronous systems, particularly in environments like JavaScript.


*/
// on - listen for an event
// emit - emit an event`
/*
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', () => {
  console.log(`data recevied `)
})
customEmitter.emit('response')
*/

// First we have to listen for the event and then we have to emit it, if we  emit first and then listen to the event then there is nothing on the console
/*
const EventEmitter = require('events');
const customEmitter = new EventEmitter();


customEmitter.on('response', () => {
  console.log(`data received`)
})

customEmitter.on('response', () => {
  console.log(`some other logic`)
})

customEmitter.emit('response')
*/

//We can pass the arguments

/*

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`first ${name} with id: ${id}`);
})

customEmitter.on('response', () => {
  console.log(`second`)
})

customEmitter.emit('response', 'john', 25)

*/

const http = require('http')

// const server = http.createServer((req, res) => {
//  res.end('Welcome')
//})

//Using Event Emitter API
const server = http.createServer()

//Emits request event
//Subcribe to it / listen for it / respons to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)




