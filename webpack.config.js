const path = require("path");
module.exports = {	
	entry: './src/client/index.jsx',
	output: {
		path: path.resolve(__dirname, "public", "dist"),
		filename: 'bundle.js'
	},
	module: {
		rules: [
		  {
			test: /\.jsx/,
			exclude: /(node_modules|bower_components)/,
			use: {
			  loader: 'babel-loader'
			}
		  }
		]
	  }
}