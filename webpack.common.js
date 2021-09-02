/* eslint-disable */
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DotenvPlugin = require('dotenv-webpack')

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    assetModuleFilename: 'assets/images/[contenthash][ext][query]',
    clean: true,
    publicPath: '/',
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
      '@/api': path.resolve(__dirname, 'src/api'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/ui-components': path.resolve(__dirname, 'src/ui-components'),
      '@/constants': path.resolve(__dirname, 'src/constants'),
      '@/contexts': path.resolve(__dirname, 'src/contexts'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/styled': path.resolve(__dirname, 'src/styled'),
      '@/animations': path.resolve(__dirname, 'src/animations'),
    },
  },
  module: {
    rules: [
      {
        test: /.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /.(png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/icons/[hash][ext][query]',
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new DotenvPlugin(),
  ],
}
