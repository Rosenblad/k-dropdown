var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	context: __dirname + '/src',
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: './public/assets/js'
	},
	module: {
		loaders: [
			{ 
				test: /\.css$/, 
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader') 
			},
		],
	},
	plugin: [
		new ExtractTextPlugin('k-dropdown.css')
	],
}
