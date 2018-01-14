var path = require('path');

// Local configuration files used to dynamically configure the project
var pjson = require(path.join(__dirname, '../', 'package.json'));

// Add code to validate the
exports.name = pjson.name;
exports.description = pjson.description;
exports.version = pjson.version;
exports.license = pjson.license;
exports.repository = pjson.repository;

//
exports.contextRoot="contextroot";
exports.port=3000;
//exports.favicon="contextroot/icon/favicon.ico";
exports.environment='development';
//
exports.groupId="com.github.stevecrox";


//Retrieve the Package.JSON
exports.clientDirectory = path.join(__dirname, '../', 'client', 'src', exports.contextRoot);

