const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const templateLoader =
	process.env.npm_package_config_template_loader;
/** @type {import('webpack').Configuration} */
module.exports = {
	entry: {
		index: "./src/index.ts",
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: process.env.npm_package_config_title,
			template:
				(typeof templateLoader === "string"
					? `!!${templateLoader}!`
					: "") + "src/index.html",
		}),
	],
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js"],
	},
	optimization: {
		moduleIds: "deterministic",
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/i,
					name: "vendors",
					chunks: "all",
				},
			},
		},
	},
};
