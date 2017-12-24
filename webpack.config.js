var webpack = require('webpack')
var path = require('path')


var BUILD_DIR = path.resolve(__dirname, 'src/public')
var APP_DIR = path.resolve(__dirname, 'src/client')

console.log(__dirname)

var config = {
  entry: APP_DIR + '/index.jsx', //our entry
  output: {
    path: BUILD_DIR, //where we make our bundle, aka path.resolve(__dirname, 'src/public')
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader',
        include: APP_DIR,
        exclude: /node_modules/
      },
      {
        test: /\.png?/,
        use: 'file-loader'
      }
    ]
  }
};

module.exports = config
