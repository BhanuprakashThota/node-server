const http = require('http')  // use require to import the built-in Node.js http package

// Use hosting values if available, otherwise default 
const environment = process.env.NODE_ENV || 'development'
const hostname = process.env.hostname || '0.0.0.0'    // allow access from remote computers
const port = process.env.PORT || 3000;

// define our server
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World! This is text - we can respond with HTML, JSON, and more :)\n')
})

// start listening and inform the user (use backtics with variables)
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/ in ${environment}`)
})