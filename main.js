// const {reverse} = require("./reverse")

//The process.argv property returns an array containing the command line arguments
// passed when the Node.js process was launched. The first element will be process.execPath.
// See process.argv0 if access to the original value of argv[0] is needed.
// The second element will be the path to the JavaScript file being executed.
// The remaining elements will be any additional command line arguments.

// The process.execPath property returns the absolute pathname of the executable
// that started the Node.js process.


//process is a global binding
//argv is argument vector. all arguments passed from the command line
// let argument = process.argv[2]
//console.log in node
//text goes to processes standard output stream
// console.log(reverse(argument));


// const {createServer} = require("http");
// let server = createServer((request, response) => {
//   response.writeHead(200, {"Content-Type": "text/html"});
//   response.write(`
//     <h1>Hello!</h1>
//     <p>You asked for <code>${request.url}</code></p>`);
//   response.end();
// });
// server.listen(8000);
// console.log("Listening! (port 8000)");
//
//
//
//
// //can also have a response.write method if its a post method
// //can also just load node-fetch module for cleaner interface
// const {request} = require("http");
// let requestStream = request({
//   hostname: "eloquentjavascript.net",
//   path: "/20_node.html",
//   method: "GET",
//   headers: {Accept: "text/html"}
// }, response => {
//   console.log("The response is ",
//               response);
// });
// requestStream.end();


// const {writeFile} = require("fs");
// writeFile("anotherfile.txt", "Node was also here", err => {
//   if (err) console.log(`Failed to write file: ${err}`);
//   else console.log("File written.");
// });
