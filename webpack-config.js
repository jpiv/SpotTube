const autoprefixer = require('autoprefixer');
const path = require('path');
const ncp =  require('ncp').ncp;
const HtmlWebpackPlugin = require('html-webpack-plugin');

ncp('./assets', './dist', function (err) {
	if(err) console.error(err);
	console.log('Assets copied.');
});


module.exports = {
	entry: ["./app/router.jsx"],
	devtool: "#cheap-module-source-map",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve('./dist')
	},
	watchOptions: {
   		poll: true
	},
	resolve: {
		alias: {
			'utils': path.resolve('./app/utils'),
			'app': path.resolve('./app')
		},
		root: path.resolve('./app/components'),
		extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /(\.jsx|\.js)$/,
				exclude: [path.resolve('./node_modules'), path.resolve('./app/lib')],
				loader: 'babel!eslint'
			},
			{
				test: /\.html$/,
				loader: 'raw-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!postcss!sass'
			},
			{
				test: /\.css$/,
				loader: 'style!css!postcss'
			},
			{
				test: /\.(woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'url-loader?limit=100000'
			},
			{
				test: /\.(jpeg|jpg|png|gif|svg)$/,
				loader: 'file!image-webpack?optimizationLevel=7&interlaced=false&bypassOnDebug'
			},
			{
				test: /\.(ttf|eot)$/,
				loader: 'file-loader'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},
	postcss: [autoprefixer()],
	sassLoader: {
		includePaths: [path.resolve('./app/sass')]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Custom template',
			template: 'index.ejs', // Load a custom template
			filename: 'index.html',
			inject: false,
			JS_BUNDLE: process.env.JS_BUNDLE_PATH || 'http://localhost:8080/main.bundle.js'
		})
	]
};