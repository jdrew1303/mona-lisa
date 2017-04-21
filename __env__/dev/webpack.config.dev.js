const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: resolve(__dirname, '../../src/index.js'),
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '../../dist'),
    libraryTarget: 'umd',
  },
  context: resolve(__dirname, '../../src'),
  devtool: 'inline-source-map',
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
        include: [resolve(__dirname, '../../src')],
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    // Set global variables.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
      NODE_ENV: JSON.stringify('development'),
      __ENV__: JSON.stringify('development'),
    }),
    // Disable debug mode.
    new webpack.LoaderOptionsPlugin({
      debug: true,
      minimize: false,
    }),
  ],
  // Disabled performance hints when we are in development.
  performance: {
    hints: false,
  },
};
