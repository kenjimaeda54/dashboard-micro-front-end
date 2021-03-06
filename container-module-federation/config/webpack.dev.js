const { merge } = require('webpack-merge');

const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const webPackCommon = require('./webpack.common');
const { dependencies } = require('../package.json');

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
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'App',
      remotes: {
        marketing: 'marketing@http://localhost:3050/remoteEntry.js',
        auth: 'auth@http://localhost:2050/remoteEntry.js',
        dashboard: 'dashboard@http://localhost:1050/remoteEntry.js',
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(webPackCommon, devConfig);
