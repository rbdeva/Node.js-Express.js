/*
Sync vs Async

Sync:
  1. Synchronous Execution:
Definition: In synchronous execution, tasks are performed one after another. Each task must complete before the next task begins.
Blocking: If a task is slow or takes time (e.g., reading a file, making an HTTP request), it blocks the execution of the next task until it finishes.
Flow: The flow of execution is linear, and the program waits for each operation to complete before moving on.


2. Asynchronous Execution:
Definition: In asynchronous execution, tasks are initiated, and the program doesn’t wait for them to finish before moving on to the next task. Instead, it continues executing other tasks and handles the result of the operation once it's done.
Non-blocking: Asynchronous operations do not block the execution of subsequent code. The program continues to run other tasks while waiting for slow operations to complete.
Callbacks, Promises, and async/await are typically used to handle asynchronous operations.

*/
