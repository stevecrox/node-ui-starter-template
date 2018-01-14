var maven = require('maven-deploy');
var fs = require('fs');
var path = require('path');
var appConfig = require(path.join(__dirname, '../', 'config', 'config.js'));

var config = {
    "groupId"      : appConfig.groupId,
    "artifactId"   : appConfig.name,
    "version"      : appConfig.version,
    "buildDir"     : appConfig.clientDirectory,
    "finalName"    : appConfig.name,
    "type"         : "war",
    "fileEncoding" : "utf-8",
    "repositories" : [
      {
        "id": "release",
        "url": "http://mavenproxy.example.com/example-internal-release/"
      }
    ]
};

// Only perform a full release on the 'production' box, we will flag this on the CI when ready to release
var snapshot = 'production' !== process.env.env;

// If we are in a Dev mode then push a SNAPSHOT build of the system.
if (snapshot) {
	config.version = config.version + '-SNAPSHOT';
}

// Set the application configuration
maven.config(config);
maven.install();


// If the system isn't a development build.
if (!snapshot) {
  console.log('Deploying the WAR to a remote repository');
  maven.deploy('release', snapshot);
}

//// We generate a WAR this will remove it
var warPath = path.join(appConfig.clientDirectory, appConfig.name  + '.war');
//fs.unlinkSync(warPath, (err) => {
//	  if (err) throw err;
//	  console.log('successfully deleted: ' + warPath);
//	});
