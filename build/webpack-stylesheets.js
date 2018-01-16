const path = require('path');

// Local configuration files used to dynamically configure the project
var appConfig = require(path.join(__dirname, '../', 'config', 'config.js'));

module.exports = {
	entry: {
	    cots: [ "bootstrap/dist/css/bootstrap.css", "bootstrap/dist/css/bootstrap-theme.css"]
	},
	output : {
		path : path.join(appConfig.clientDirectory, 'cots'),
		filename : '[name].css'
	},
	module : {
		rules: [
		        {
		          test: /\.css$/,
		          use: [
		                { loader: "style-loader" },
		                { loader: "css-loader" }
		              ]
		        },
		        {
		        	  test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
		        	  loader: 'file-loader',
		        }
		      ]
	}
};