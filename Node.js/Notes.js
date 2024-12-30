/*
                                              Node.js
    . Environemnet to run JS outside browser
    . Built on chrome's v8 JS Engine
    (Every browser has a engines which compiles our code to machine code)

    Brwser Js vs Node JS
    Browser JS : DOM, Window, Interactive Apps, No Filesystem, Fragmentation, ES6 Modules
    Node JS: No DOM, No Window, Server side apps, Filesystem, Versions, CommonJS
      When working on NodeJS, we have no access to browser APIs 

      With node we built Server side apps, which contains pure logic, no graphical interfaces

      For venilla.js we create index.html and browser execute/evaluates our code but for Node.js we have 2 options
        REPL - Read-Eval-Print Loop
        CLI - Command Line Interface, running our code in node.

        For small code, we can use REPL, open terminal -> type node -> const name = "Sony" ->name To exit cntrol + c

        But for applications, we will use CLI


        cd..
        D:
        cd D:\Node.js and Express.js\Node.js>
        node app.js


        
*/