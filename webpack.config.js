/* eslint-disable */
const {resolve} = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    pathinfo: true,
  },
  context: resolve(__dirname),
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel!eslint', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css' },
    ],
  },
  node: {
    fs: 'empty',
  },
};
