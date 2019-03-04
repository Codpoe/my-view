const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = ({ env }) => {
  return {
    mode: env.mode,
    entry: {
      docs: './docs/index.js'
    },
    output: {
      path: path.resolve(__dirname, '../docs/dist'),
      publicPath: '/',
      filename: '[name].bundle.js',
      chunkFilename: 'async_[name].bundle.js'
    },
    resolve: {
      alias: {
        'xview': path.resolve(__dirname, '../src'),
        'docs': path.resolve(__dirname, '../docs')
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          exclude: /node_modles/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.(jpg|jpeg|png)$/,
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        },
        {
          test: /\.(eot|svg|ttf|woff)$/,
          loader: 'file-loader',
        },
        {
          test: /\.md$/,
          use: [
            'babel-loader',
            '@codpoe/react-markdown-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new HtmlWebpackPlugin({
        chunks: ['docs'],
        template: 'docs/index.tpl',
        filename: 'index.html',
        inject: true
      }),
      new ProgressBarPlugin()
    ],
    devServer: {
      host: '0.0.0.0',
      port: 8008,
      historyApiFallback: true,
      hot: true,
    },
    devtool: 'source-map'
  };
};
