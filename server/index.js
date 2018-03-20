var http = require('http');
var router = require('../router');
var handler = require('./handler');

var start = function () {
  var server = http.createServer((req, res)=>{
    handler(req, ()=>{
      router(req, res);
    });
  });

  server.listen('3000','127.0.0.1', ()=>{
    console.log('server is running on port 3000');
  });
}

module.exports.start = start;