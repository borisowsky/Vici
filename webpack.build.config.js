const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    path: OUTPUT_DIR,
    publicPath: './',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'csso-loader', 'sass-loader'],
        }),
        include: [SRC_DIR],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: [SRC_DIR],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: ['file-loader?name=img/[name]__[hash:base64:5].[ext]'],
        include: [SRC_DIR],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['file-loader?name=font/[name]__[hash:base64:5].[ext]'],
        include: [SRC_DIR],
      },
    ],
  },

  target: 'electron-renderer',

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new BabiliPlugin(),
  ],

  stats: {
    colors: true,
    children: false,
    chunks: false,
    modules: false,
  },
};
