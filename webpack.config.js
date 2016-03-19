module.exports = {
	entry: './src/main.jsx',
	output: {
		path: './',
		publicPath: "/public/",
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 3333,
		contentBase: './public'
	},
	module: {
		loaders: [{
			test: /\.jsx$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
};