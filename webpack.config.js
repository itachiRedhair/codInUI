const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./config');

const { dirSrc, dirDist } = config;

module.exports = {
  entry: path.join(dirSrc, 'index.js'),
  output: {
    path: dirDist,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: dirDist,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: dirSrc,
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
        }),
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jpg|gif|ttf|woff|woff2|otf)$/,
        include: dirSrc,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'style.css' }),
    new HtmlWebpackPlugin({
      template: path.join(dirSrc, 'index.html'),
      filename: 'index.html',
      inject: 'body',
      favicon: path.join(dirSrc, 'assets', 'favicon.ico'),
    }),
  ],
};
