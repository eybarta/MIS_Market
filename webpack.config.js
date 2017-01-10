var ExtractTextPlugin = require("extract-text-webpack-plugin"),
path = require('path'),
webpack = require('webpack'),
poststylus = require('poststylus');

const settings = path.resolve(__dirname, './src/styl/settings.styl');
// webpack.config.js
module.exports = {
	// entry point of our application
	entry: {
		script: './src/index.js',
		//catalog: './controls/vue_catalog/index.js',
	},
	// where to place the compiled bundle
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist/',
		filename: 'js/[name].js'
	},
	module: { 
		rules: [
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
				exclude: /node_modules/,
				use: [
		          	'style-loader',
		          	{ loader: ExtractTextPlugin.extract({
							  loader: 'css-loader!stylus-loader',
							  preferPathResolver: 'webpack',
							  exclude: /fonts/
							})
					}
		        ]

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
				loader: 'file-loader',
				options: {
					
				  name: 'img/[name].[ext]?[hash]'
				}
			},

		]
		
	},
	plugins: [		
		new webpack.LoaderOptionsPlugin({
			test: /\.styl$/,
			options: {
			context: path.resolve(__dirname, 'src/styl'),
				stylus: {
					use: [poststylus([ 'lost', 'rucksack-css' ])],
					import: ['settings.styl']	

				}
			}
		}),		
		new ExtractTextPlugin("css/style.css")
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js',
			settings
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
	new webpack.DefinePlugin({
	  'process.env': {
		NODE_ENV: '"production"'
	  }
	}),
	new webpack.optimize.UglifyJsPlugin({
	  sourceMap: true,
	  compress: {
		warnings: false
	  }
	}),
	new webpack.LoaderOptionsPlugin({
	  minimize: true
	})
  ])
}