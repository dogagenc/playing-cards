var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'lib'),
		filename: 'index.js',
		library: "PlayingCards",
		libraryTarget: "umd"
	},
	module: {
		loaders: [
			{
				test: /.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'stage-0']
				}
			}
		]
	},
};
