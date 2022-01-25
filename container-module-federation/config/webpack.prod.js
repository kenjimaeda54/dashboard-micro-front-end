const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const common = require('./webpack.common.js');
const { dependencies } = require('../package.json');

const domain = process.env.DOMAIN;

const configProduction = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'App',
      remotes: {
        // posso ter vários remotes entry nesse caso
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(common, configProduction);
