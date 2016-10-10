var webpack = require('webpack');
var path = require('path');
//Thư mục sẽ chứa tập tin được biên dịch
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
//Thư mục chứa dự án - các component React
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
   module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;