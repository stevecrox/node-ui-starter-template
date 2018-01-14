'use strict';
//
var path = require('path');

//Local configuration files used to dynamically configure the project
var appConfig = require(path.join(__dirname, '../', 'config', 'config.js'));
//
var contextRootDirectory = path.join(__dirname, '../', 'client', 'src', appConfig.contextRoot);

module.exports = {
  cache: true,
  // ### Output
  // karma-webpack will specify the output path when testing. This
  // setting is used for building.
  output: {
	path: path.join(contextRootDirectory, 'js', 'cots'),
	filename: '[name].js'
  },
  module: {
    // ### Loaders
    loaders: [
      { test: /datatables\.net.*/, loader: 'imports?define=>false' },
      // **IMPORTANT** This is needed so that each bootstrap js file required by
      // bootstrap-webpack has access to the jQuery object
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

      // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
    ]
  }
};
