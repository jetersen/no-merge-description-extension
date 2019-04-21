/* eslint-env node */
/* eslint-disable import/no-commonjs */

const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

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
  ],
  optimization: {
    concatenateModules: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          mangle: false,
          compress: false,
          output: {
            beautify: true,
            indent_level: 2 // eslint-disable-line @typescript-eslint/camelcase
          }
        }
      })
    ]
  }
}
