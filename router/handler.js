var fs = require('fs');

var Hander = function () {}
var hdp = Hander.prototype = {};

// 首页
hdp.home = (res) => {
  res.writeHead(200,{
    'Content-Type':'text/html'
  });
  fs.createReadStream(__dirname + '/../views/index.html', 'utf8').pipe(res);
}

// 列表页
hdp.list = (res,params) => {
  console.log('params');
  console.log(params);

  res.writeHead(200,{
    'Content-Type':'text/html'
  });
  fs.createReadStream(__dirname + '/../views/list.html', 'utf8').pipe(res);
}

// 详情页
hdp.detail = (res, params) => {
  console.log('detail params');
  console.log(params);
  res.writeHead(200,{
    'Content-Type':'text/html'
  });
  fs.createReadStream(__dirname + '/../views/detail.html', 'utf8').pipe(res);
}

// post 测试页
hdp.post = (res) => {
  res.writeHead(200,{
    'Content-Type':'text/html'
  });
  fs.createReadStream(__dirname + '/../views/post.html', 'utf8').pipe(res);
}

module.exports = new Hander();