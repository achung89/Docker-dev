const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "dist"
  },
  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        use: 'babel-loader',
        exclude:/node_modules/
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template:'client/index.html'
  })],
  // watchOptions: {
  //   poll: 1000
  // }

};
    //"dev": "webpack-dev-server --config=webpack.dev.config.js"