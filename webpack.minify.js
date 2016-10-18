var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpackConfig = require('./webpack.config')

module.exports = {
	context: __dirname + '/src',
	entry: './index.js',
	output: {
		filename: 'k-dropdown.min.js',
		path: __dirname + '/dist/minified'
	},
	module: {
		loaders: [
			{ 
				test: /\.css$/, 
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
			},
		],
	},
	plugins: [
		new ExtractTextPlugin('k-dropdown.css')
	],
}
