var fs = require('fs');

var router = function (req, res) {
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
};

module.exports = router;