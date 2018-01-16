const webpack = require('webpack');
const path = require('path');

// Local configuration files used to dynamically configure the project
var appConfig = require(path.join(__dirname, '../', 'config', 'config.js'));
//
var contextRootDirectory = path.join(__dirname, '../', 'client', 'src', appConfig.contextRoot);

module.exports = {
  entry: {
	  indexBundle: [ 'bootstrap', 'jquery' ],
	  tablesBundle: [ 'bootstrap', 'jquery', 'datatables.net', 'datatables.net-bs' ],
  },
  resolve: {
	  alias: {
	        jquery: "jquery/src/jquery"
	  }
  },
  output: {
    path: path.join(contextRootDirectory, 'cots'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
    	   $: "jquery",
    	   jQuery: "jquery"
    	  })
  ]
};