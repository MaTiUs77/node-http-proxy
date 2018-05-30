var http = require('http'),
    httpProxy = require('http-proxy');

var port = 80;
var server = httpProxy.createProxyServer({target:'http://172.17.0.1:8888'});

console.log("siep-http-proxy listening on port", port)
server.listen(port);
 
