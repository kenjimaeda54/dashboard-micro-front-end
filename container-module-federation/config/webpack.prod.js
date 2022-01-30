const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('../package.json');
const common = require('./webpack.common.js');

const domain = process.env.PRODUCTION_DOMAIN;

const configProduction = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'App',
      remotes: {
        // posso ter vários remotes entry nesse caso
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(common, configProduction);
