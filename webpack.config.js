const webpack = require('webpack');
const path = require('path');
const poststylus = require('poststylus');

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
	// new webpack.LoaderOptionsPlugin(
	// 		{
	// 		test: /\.styl$/,
	// 		options: {
	// 				stylus: {
	// 					use: [poststylus([ 'lost', 'rucksack-css' ])],

	// 				}
	// 			},
	// 		  preferPathResolver: 'webpack',
	// 		}
	// 		),		
	
		new ExtractTextPlugin("css/style.css")

]

// COMMON RULES
const rules = [
		{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					postcss: [require('lost')(), require('autoprefixer')(), require('rucksack-css')()],
					loaders: {
						css: ExtractTextPlugin.extract({
							  loader: 'vue-style-loader!css-loader!stylus-relative-loader?paths=src/styl',
							  fallbackLoader: 'style-loader',								
						}),
					},
				}
			},
			{
				test: /\.styl$/,
				use: ExtractTextPlugin.extract({
					loader: 'css-loader!stylus-loader',
					fallbackLoader:'style-loader'
				})
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			  },
			  {
					test: /\.(eot|ttf|woff|svg)$/,
					loader: 'ignore-file-loader',

					options: {						
						name: '../fonts/[name].[ext]?[hash]'
					}
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader?limit=5000&name=img/img-[hash:6].[ext]',
				
			},
]
if (isProduction) {
  // Production plugins
  plugins.push(
		// new webpack.optimize.OccurenceOrderPlugin(),
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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
				drop_console: false
      },
      output: {
        comments: true,
      },
    })
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
			'vue-awesome-swiper',
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
		publicPath: "/",
		filename: 'js/[name].js'
	},
	
	module: { 
		rules
		
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js',
			'assets': path.resolve(__dirname,'dist'),
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