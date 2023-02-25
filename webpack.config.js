const path = require('path');
// generates its ownn index.html file
// allows to change dynamically entry points 
// generates a single html file
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  plugins: [new HtmlWebpackPlugin({ title: 'Output Management' })],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
