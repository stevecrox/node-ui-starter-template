const
HtmlWebpackPlugin = require('html-webpack-plugin');
const
ExtractTextPlugin = require('extract-text-webpack-plugin');
const
webpack = require('webpack');
const
path = require('path');

// Local configuration files used to dynamically configure the project
var appConfig = require(path.join(__dirname, '../', 'config', 'config.js'));
//
var contextRootDirectory = path.join(__dirname, '../', 'client', 'src',
		appConfig.contextRoot);

const extractCSS = new ExtractTextPlugin('[name].css');
const extractLESS = new ExtractTextPlugin('[name].less');

module.exports = {
	resolve: {
	    extensions: ['.css'], //An empty string is no longer required.
	    modules: [
	      'bootstrap'
	    ]
	},
	entry : {
		'bootstrap-theme' : ['bootstrap']
	},
	output : {
		path : path.join(contextRootDirectory, 'stylesheets'),
		filename : '[name]'
	},
	module : {
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