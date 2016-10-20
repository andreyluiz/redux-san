var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'app.js'
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.tag$/,
    //     exclude: /node_modules/,
    //     loader: 'riotjs-loader',
    //     query: {
    //       type: 'none'
    //     }
    //   }
    // ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};