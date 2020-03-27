const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const miniCSSExtractPlugin = require('mini-css-extract-plugin');

const outputFileName = `vj-auth-form`;

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${outputFileName}.js`,
    library: outputFileName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', miniCSSExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new copyWebpackPlugin([
      {
        context: 'node_modules/@webcomponents/webcomponentsjs',
        from: '**/*.js',
        to: 'webcomponents'
      }
    ]),
    new miniCSSExtractPlugin({
      filename: 'style.css'
    }),
    new htmlWebpackPlugin({
      inject: 'head',
      title: 'vj-auth-form',
      template: './index.html'
    })
  ]
};
