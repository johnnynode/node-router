

var handler = require('./handler');

var List = function () {};
var ltp = List.prototype = {};

ltp["/"] = handler.home;

module.exports = new List();