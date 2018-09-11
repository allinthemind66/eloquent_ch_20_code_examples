const {reverse} = require("./reverse")

//The process.argv property returns an array containing the command line arguments
// passed when the Node.js process was launched. The first element will be process.execPath.
// See process.argv0 if access to the original value of argv[0] is needed.
// The second element will be the path to the JavaScript file being executed.
// The remaining elements will be any additional command line arguments.

// The process.execPath property returns the absolute pathname of the executable
// that started the Node.js process.

let argument = process.argv[2]

console.log(reverse(argument));


const {createServer} = require("http");
let server = createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.url}</code></p>`);
  response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");
