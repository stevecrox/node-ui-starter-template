var path = require('path');
// Local configuration files used to dynamically configure the project
var appConfig = require(path.join(__dirname, '../', '../', '../', 'config', 'config.js'));

exports.name = function(req, res){
  res.send(appConfig.name);
};

exports.version = function(req, res){
  res.send(appConfig.version);
};