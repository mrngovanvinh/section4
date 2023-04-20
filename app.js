const http = require('http');

const routes = require('./route.js');

const server = http.createServer(routes) ;

server.listen(3000);