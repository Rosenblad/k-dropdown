var webpackConfig = require('./webpack.config')

webpackConfig.output = {
	filename: 'bundle.js',
	path: './public/assets/js'
}

module.exports = webpackConfig
