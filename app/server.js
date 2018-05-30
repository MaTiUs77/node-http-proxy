// include dependencies
var express = require('express');
var proxy = require('http-proxy-middleware');

var proxyPort = 80;

// proxys
var auth_api = proxy({
       target: 'http://172.17.0.1:8888',
       changeOrigin: true,
       pathRewrite: {
            '^/auth' : '/',
       }
    }
);

var laravel_api = proxy({
       target: 'http://172.17.0.1:3000',
       changeOrigin: true,
       pathRewrite: {
            '^/api' : '/api',
       }
    }
);

// mount `exampleProxy` in web server
var app = express();

app.use('/auth/**', auth_api);
app.use('/api/**', laravel_api);
    
console.log("proxy-port listening on port",proxyPort);
app.listen(proxyPort);
