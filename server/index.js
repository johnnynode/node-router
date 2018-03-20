var http = require('http');
var router = require('../router');

var serverStart = function () {
  var onRequest = (req, res)=> {
    router(req, res);
  };

  var server = http.createServer(onRequest);
  server.listen('3000','127.0.0.1', ()=>{
    console.log('server is running on port 3000');
  });
}



module.exports.start = serverStart;