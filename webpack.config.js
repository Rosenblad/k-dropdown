module.exports = {
	context: __dirname + '/src',
	entry: './index.js',
	module: {
		loaders: [
			{ 
				test: /\.css$/, 
				loaders: ['style-loader', 'css-loader'], 
			},
			{
				test: /\.js$/,
				loader: 'babel'
			}
		],
	},	
}
