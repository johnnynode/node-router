

var handler = require('./handler');

var List = function () {};
var prototype = List.prototype = {};

prototype["/"] = handler.home;

module.exports = new List();