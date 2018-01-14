const webpack = require('webpack');
const path = require('path');

// Local configuration files used to dynamically configure the project
var appConfig = require(path.join(__dirname, '../', 'config', 'config.js'));
//
var contextRootDirectory = path.join(__dirname, '../', 'client', 'src', appConfig.contextRoot);

module.exports = {
  entry: {
	  indexBundle: [ 'bootstrap', 'jquery' ],
  },
  output: {
    path: path.join(contextRootDirectory, 'js', 'cots'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};