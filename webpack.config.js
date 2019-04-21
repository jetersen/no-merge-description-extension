/* eslint-env node */
/* eslint-disable import/no-commonjs */

const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    github: './source/github'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'source/manifest.json' },
      { from: 'images/icon.png' }
    ])
  ]
}
