const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

var config = {
	context: path.resolve(__dirname, "src"),
	devtool: "source-map",
	entry: {
		fitmatch: "./index.tsx",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
	},
	plugins: [
		new CleanWebpackPlugin(["./dist/*.*"]),
		// new BundleAnalyzerPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: /node_modules/,
				options: {
					configFile: "tsconfig.json",
				},
			},
		],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"],
	},
	externals: {
		// Use external version of React
		// "react": "React",
		// "react-dom": "ReactDOM",
		// "prop-types": "PropTypes"
	},
};

module.exports = config;