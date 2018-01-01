/**
 * Express Modules
 */
var express = require('express');
var bodyParser = require('body-parser');
var errorhandler = require('errorhandler');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var serveStatic = require('serve-static');

var fs = require('fs');
var path = require('path');

/**
 * Define all Files which hold handling for REST calls.
 */
var routes = require('./routes/index');
var user = require('./routes/user');

//Local configuration files used to dynamically configure the project
var appConfig = require(path.join(__dirname, '../', '../', 'config', 'config.js'));

// start building the web server
var app = express();
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Path to the client folder.
var publicPath = path.join(__dirname, '../', '../', 'client', 'src');
app.use(serveStatic(publicPath));

// Favicon setup can be in config or we can try a default path
var faviconPath;
if ('favicon' in appConfig) {
  faviconPath = appConfig.faviconPath;
} else {
  faviconPath = path.join(publicPath, appConfig.contextRoot, 'ico', 'favicon.ico');
}
// Only setup Favicon  if we have a valid file
if (fs.existsSync(faviconPath)) {
	app.use(favicon(faviconPath));
}

// development only
if ('development' === appConfig.environment) {
  app.use(errorhandler());
  app.use(morgan('combined'))
}


/**
 * This is where we define
 */

app.get('/', routes.index);
app.get('/users', user.list);

// Start the server
app.listen(appConfig.port, function() {
  console.log('Express server listening on port ' + appConfig.port);
});
