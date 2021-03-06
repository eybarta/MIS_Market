﻿const PrerenderSpaPlugin = require('prerender-spa-plugin')

const webpack = require('webpack');
const path = require('path');
const poststylus = require('poststylus');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MinifyPlugin = require("babel-minify-webpack-plugin");
// const BabiliPlugin = require("babili-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DashboardPlugin = require('webpack-dashboard/plugin');

const normalize = path.resolve(__dirname, './node_modules/css-reset-and-normalize/stylus/flavored-reset-and-normalize.styl');
const rupture = path.resolve(__dirname, './node_modules/rupture/rupture/index.styl');

const settings = path.resolve(__dirname, './src/styl/settings.styl');
const utils = path.resolve(__dirname, './src/utils.js');


const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';


const jsSourcePath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './dist');


const plugins = [
	new webpack.LoaderOptionsPlugin({
		options: {
			stylus: {
				use: [poststylus(['autoprefixer', 'rucksack-css'])]
			}
		}
	}),
	new ExtractTextPlugin({ 
			filename: "css/style.[contenthash].css",
			allChunks:true
	})
	,
	new HtmlWebpackPlugin({
		template: '../src/index-template.html',
		title: 'MIS Market',
		filename: path.resolve(__dirname, 'dist/index.html'),
		inject: true,
		minify: {
		  removeComments: true,
		//   collapseWhitespace: true,
		  removeAttributeQuotes: true
		  // more options:
		  // https://github.com/kangax/html-minifier#options-quick-reference
		},
		chunksSortMode: 'dependency'
	  })
]

// COMMON RULES
const rules = [
	{
		test: /\.vue$/,
		loader: 'vue-loader',
		options: {
			extractCSS: true,
			postcss: [require('lost')(), require('autoprefixer')(), require('rucksack-css')()],
		}
	},
	{
		test: /\.styl$/,
		use: ExtractTextPlugin.extract({
			use: 'css-loader!stylus-loader',
			fallback: 'style-loader'
		})
	},
	{
		test: /\.js$/,
		loader: 'babel-loader',
		exclude: /node_modules/
	},
	{
		test: /\.(eot|ttf|woff|svg)$/,
		loader: 'file-loader?name=font-[hash:6].[ext]',
		include: [/fonts/],
		// options: {						
		// 	name: '../fonts/[name].[ext]?[hash]'
		// }
	},
	{ test: /\.css$/, loader: "style-loader!css-loader" },
	{
		test: /\.(png|jpg|gif|svg)$/,
		loader: 'url-loader?limit=5000&name=img-[hash:6].[ext]&publicPath=/dist/&outputPath=img/',
	},
]
if (isProduction) {
	// Production plugins
	plugins.push(
		
		new webpack.optimize.CommonsChunkPlugin({
			names: ['common', 'vendor'],
			minChunks: Infinity,
			filename: 'js/[name].js'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(nodeEnv),
			},
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false,
		}),
		// new BabiliPlugin({removeConsole:true, removeDebugger:true}),
		// new MinifyPlugin(),
		new UglifyJSPlugin()
		,
		new PrerenderSpaPlugin(
			buildPath,
			[ '/', '/categories/Printed%20Materials' ],
			{
				captureAfterDocumentEvent: 'now-you-shall-prerender'
				// captureAfterTime: 20000
			}
		)		
	);
}
else {
	// Development plugins
	plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new DashboardPlugin()
	);
}
module.exports = {
	devtool: isProduction ? 'cheap-module-source-map' : 'eval',
	context: jsSourcePath,
	// entry point of our application
	entry: {
		script: './index.js',
		common: [
			'vue',
			'vuex',
			'vue-router',
			'vuex-router-sync',
			'vue-paginate'
		],
		vendor: [
			'jquery',
			'lodash',
			'velocity-animate'
		],
	},
	// where to place the compiled bundle
	output: {
		path: buildPath,
		publicPath: "/dist/",
		filename: 'js/[name].[hash].js',
		chunkFilename: 'js/chunks/[name].[hash].js',
		hotUpdateChunkFilename: 'hot/hot-update.js',
    	hotUpdateMainFilename: 'hot/hot-update.json'
	},

	module: {
		rules

	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js',
			'assets': path.resolve(__dirname, 'dist'),
			settings,
			utils,
			normalize,
			rupture
		}
	},
	plugins,
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
}