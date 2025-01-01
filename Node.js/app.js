/*
Request (from Client to Server):

Client (browser or API) sends a request to the server.
The request includes method (GET, POST), URL (e.g., /about), headers (metadata), and optional data (like form inputs).
Server Processes the Request:

The server (Node.js/Express) reads and processes the request using routing logic.
It determines what action to take (fetch data, save info, etc.).
Response (from Server to Client):

The server sends a response back to the client.
The response includes a status code (e.g., 200 OK, 404 Not Found), headers (metadata), and data (HTML, JSON, etc.).

The above process is called http messages



Common HTTP Methods:
Method                            	Purpose	Example
GET	                                Retrieve data	Fetch a webpage or API data
POST                                  	Send data to the server	Submit a form or JSON payload
PUT	                                  Update existing data	Modify user profile
DELETE                                	Remove data	Delete a record in a database


Common Status Codes:
Code	                    Meaning	                                           Description
200	                      OK	                                       Request succeeded, data sent in the response
404	                      Not Found	                                  Resource not found on the server
500	                     Internal Server Error	                        Server encountered an error processing request
301	                        Moved Permanently	                            Resource has been moved to a new location

*/