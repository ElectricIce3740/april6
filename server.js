var http = require('http');
export default server; //  Exports the 'server' object.  This is necessary for Vercel to be able to use your server.

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
})



const port = process.env.PORT || 3000;  //  Defines the port number the server will listen on.
//  'process.env.PORT' is an environment variable.  Vercel will set this, so your server listens on the correct port.
//  If 'process.env.PORT' is not defined (e.g., when you're running the code on your own computer), it defaults to 3000.

server.listen(port, () => {  //  Starts the server and listens for incoming requests on the specified port.
  //  The function passed to 'server.listen' is another callback function that gets called when the server starts listening.
  console.log(`Server running at http://localhost:${port}/`);  //  Prints a message to the console indicating that the server is running.  This is helpful for you, the developer.
});