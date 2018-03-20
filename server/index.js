var http = require('http');
var fs = require('fs');

var serverStart = function () {
  var server = http.createServer((req, res)=>{
    var method = req.method;
    var url = req.url;
    if(url === '/') {
      res.writeHead(200,{
        'Content-Type':'text/html'
      });
      fs.createReadStream(__dirname + '/../views/index.html', 'utf8').pipe(res);
    }else{
      res.writeHead(200,{
        'Content-Type':'text/html'
      });
      fs.createReadStream(__dirname + '/../views/404.html', 'utf8').pipe(res);
    }
  });
  
  server.listen('3000','127.0.0.1', ()=>{
    console.log('server is running on port 3000');
  });
}



module.exports.start = serverStart;