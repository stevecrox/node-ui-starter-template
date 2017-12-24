var maven = require('maven-deploy');
var path = require('path');

// Local configuration files used to dynamically configure the project
var appConfig = require(path.join(__dirname, 'config.js'));
var pjson = require(path.join(__dirname, '../', 'package.json'));

// Retrieve the Package.JSON
var clientDirectory = path.join(__dirname, '../', 'client', 'src', appConfig.contextroot);

// Output the information we will be using.
console.log("Artifact ID:\t" + pjson.name);
console.log("Version:\t" + pjson.version);
console.log("Directory:\t" + clientDirectory);

var config = {
    "groupId"      : appConfig.groupId,
    "artifactId"   : pjson.name,
    "version"      : pjson.version,
    "buildDir"     : clientDirectory,
    "finalName"    : pjson.name,
    "type"         : "war",
    "fileEncoding" : "utf-8",
    "repositories" : [
      {
        "id": "release",
        "url": "http://mavenproxy.example.com/example-internal-release/"
      }
    ]
};

maven.config(config);

// Development only
if ('development' === process.env.env) {
  maven.install();
} else {
  maven.install();
  //maven.deploy('release', false);
}
