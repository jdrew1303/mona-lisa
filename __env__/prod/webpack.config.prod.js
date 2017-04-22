const { resolve } = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  entry: {
    bundle: resolve(__dirname, '../../src/index.js'),
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '../../dist'),
    libraryTarget: 'umd',
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [resolve(__dirname, '../../src')],
        use: 'xo-loader',
        enforce: 'pre',
      },
      {
        test: /\.js$/,
        include: [resolve(__dirname, '../../src'), /node_modules/],
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    // Set global variables.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      NODE_ENV: JSON.stringify('production'),
      __ENV__: JSON.stringify('production'),
    }),
    // Add progress-bar.
    new ProgressBarPlugin(),
    // Remove the old artifacts directory.
    new CleanWebpackPlugin(['dist'], { root: process.cwd() }),
    // Minify output and remove comments.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
    }),
    // Tell Xo lint to emit errors and stop build process.
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        xo: {
          emitError: true,
        },
      },
    }),
  ],
};
