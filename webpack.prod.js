/* eslint-disable */
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [new BundleAnalyzer(), new CompressionPlugin()],
})
