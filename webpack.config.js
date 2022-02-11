const path = require("path");
module.exports = {	
	entry: './src/client/index.js',
	output: {
		path: path.resolve(__dirname, "public", "dist"),
		filename: 'bundle.js'
	}
}