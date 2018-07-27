const webpack = require('webpack');
const config = {
    entry:  __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
	  rules: [
	    {
	      test: /\.jsx?/,
	      exclude: /node_modules/,
	      use: 'babel-loader'
	    },
        {
          test: /\.scss?/,
          loader: 'style-loader!css-loader!sass-loader' 
        }
	  ]
	},
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    }
};
module.exports = config;