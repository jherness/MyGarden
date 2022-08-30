/* jshint esversion:6*/ 


var http = require('http');
const PORT = 8888;

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text / html"});
    res.write("Hello World!");
    res.end();
}).listen(PORT);