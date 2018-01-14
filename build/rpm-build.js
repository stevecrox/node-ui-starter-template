var rpm = require('rpmbuild');
var fs = require('fs');
var path = require('path');

// Application Configuration
var appConfig = require(path.join(__dirname, '../', 'config', 'config.js'));

//generate
var rpmFiles = {};
rpmFiles['/var/local/' + appConfig.contextRoot] = [];
rpmFiles['/var/local/' + appConfig.contextRoot].push(path.join(__dirname, '../', 'client/**'));
rpmFiles['/var/local/' + appConfig.contextRoot].push(path.join(__dirname, '../', 'node_modules/**'));
rpmFiles['/var/local/' + appConfig.contextRoot].push(path.join(__dirname, '../', 'server/**'));

rpm.build({
	  name: appConfig.name,
	  summary: appConfig.description,
	  description: appConfig.description,
	  version: appConfig.version,
	  release: 1,
	  url: appConfig.repository.url,
	  license: appConfig.license.type,
	  group: 'Development/Tools',
	  rpmRootDir: path.join(__dirname, '../', 'rpmbuild'),
	  cwd: path.join(__dirname, '../'),
	  files: rpmFiles,
	  installScript: ['echo "test" > %{buildroot}/test.txt']
	}, function(err, result){
	  if (err){
	    throw new Error('rpm.build failed' + err.toString());
	  }
	  console.log('done');
	});