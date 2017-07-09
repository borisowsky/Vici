const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { spawn } = require('child_process');

const SRC_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    path: OUTPUT_DIR,
    publicPath: '/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],

  devtool: 'cheap-source-map',

  devServer: {
    contentBase: OUTPUT_DIR,
    stats: {
      colors: true,
      chunks: false,
      children: false,
    },
    setup() {
      spawn('electron', ['.'], { shell: true, env: process.env, stdio: 'inherit' })
      .on('close', () => process.exit(0))
      .on('error', spawnError => console.error(spawnError));
    },
  },
};
