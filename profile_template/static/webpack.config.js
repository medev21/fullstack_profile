const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
    entry:  __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        // publicPath: '/projects/'
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
        },
        {
          test: /\.(png|jpg|gif|svg|mp4|mov)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '/assets/[name]-[hash:8].[ext]'
                // name: 'images/[name].[ext]'
              }
            }
          ]
        }
  	  ]
  	},
    plugins: [
        new CopyWebpackPlugin([
            { from: './index.html', to: './index.html' }
        ])
    ],
    devServer: {
      publicPath: '/',
      contentBase: __dirname + '/dist',
      port: 1234,
      historyApiFallback: {
            index: 'index.html'
      }
    }
};
module.exports = config;