const production = require('../prod/webpack.config.prod');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = Object.assign({}, production, { plugins: [...production.plugins, new BundleAnalyzerPlugin] });
