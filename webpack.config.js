var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'app.js',
    publicPath: 'js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  devServer: {
    contentBase: './public',
    inline: true,
    hot: true
  }
};