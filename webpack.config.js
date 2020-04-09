const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
  devtool: 'sourcemap',
	output: {
		//target directory to put built js file
		path: path.join(__dirname, "/dist"),
		// filename
		filename: "index_bundle.js"
		//				publicPath: "/builds",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html")
		})
	]
};
