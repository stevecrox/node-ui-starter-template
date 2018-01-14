const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

//'font-awesome': [ 'font-awesome/css/font-awesome.css' ]

// Local configuration files used to dynamically configure the project
var appConfig = require(path.join(__dirname, '../', 'config', 'config.js'));

const extractCSS = new ExtractTextPlugin('[name].css');
const extractLESS = new ExtractTextPlugin('[name].less');

module.exports = {
	entry: {
	    datatables: [ 'datatables.net-bs/css/dataTables.bootstrap.css' ],
	    bootstrap: [ "bootstrap-webpack"]
	},
	output : {
		path : path.join(appConfig.clientDirectory, 'stylesheets'),
		filename : '[name].css'
	},
	module : {
	    loaders: [
	              { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
	              { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
	              { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
	              { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
	            ],
		rules : [
		{
			test: /\.css$/,
			use : extractCSS.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
		},
		{
	        test: /\.less$/i,
	        use: extractLESS.extract({
	            fallback: "css-loader",
	            use: "less-loader"
	          })
	      },]
	},
	plugins : [ extractCSS, extractLESS ]
};