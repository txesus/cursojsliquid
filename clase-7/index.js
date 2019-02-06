var http = require('http');

http.createServer(function (req, res) {
  res.write('Hola Mundo!'); 
  res.end(); 
}).listen(8080); 