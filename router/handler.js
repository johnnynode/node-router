var fs = require('fs');

var Hander = function () {}
var prototype = Hander.prototype = {};

// 首页
prototype.home = (res)=> {
  res.writeHead(200,{
    'Content-Type':'text/html'
  });
  fs.createReadStream(__dirname + '/../views/index.html', 'utf8').pipe(res);
}

module.exports = new Hander();