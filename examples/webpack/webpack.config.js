var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, './index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'knockout-backbone-view-example.js',
    devtoolModuleFilenameTemplate: function (info) {
      if (path.isAbsolute(info.absoluteResourcePath)) {
        return 'webpack-src:///knockout-backbone-view-example/' + path.relative('.', info.absoluteResourcePath);
      }
      return info.absoluteResourcePath;
    },
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  resolve: {
    alias: {
      'knockout-backbone-view': path.resolve(__dirname, '../..'),
    },
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
  ],
  devtool: 'source-map',
};
