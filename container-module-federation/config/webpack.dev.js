const { merge } = require('webpack-merge');

const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const webPackCommon = require('./webpack.common');
const { dependencies } = require('../package.json');
const { SourceMapDevToolPlugin } = require('webpack');

const devConfig = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:4050/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    // para webpack entender a extensão jsx
    // se for usar tsx tambem precisa colocar aqui
  },
  devServer: {
    port: 4050,
    hot: true,
    open: true,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'App',
      remotes: {
        marketing: 'marketing@http://localhost:3050/remoteEntry.js',
        auth: 'auth@http://localhost:2050/remoteEntry.js',
      },
      shared: dependencies,
    }),
    new SourceMapDevToolPlugin({
      filename: '[name].map',
    }),
  ],
};

module.exports = merge(webPackCommon, devConfig);
