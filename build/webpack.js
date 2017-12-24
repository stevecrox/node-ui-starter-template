const path = require('path');
const webpack = require('webpack');
const appConfig = require(path.join(__dirname, 'config.js'));

//
var clientDirectory = path.join(__dirname, '../', 'client', 'src', appConfig.contextroot, 'js', 'cots');




module.exports = {
	entry : './main.js',
	output : {
		path : clientDirectory,
		filename : 'bundle.js'
	},
	watch : true,
	plugins : [ new webpack.ProvidePlugin({
		$ : "jquery",
		jQuery : "jquery",
		"window.jQuery" : "jquery"
	}) ],
	module : {
		loaders : [ {
			test : /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
			loader : "imports?this=>window"
		}, {
			test : /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
			loader : "imports?define=>false"
		} ]
	}
}