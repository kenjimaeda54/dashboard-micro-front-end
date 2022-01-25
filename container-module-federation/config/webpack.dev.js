const { merge } = require('webpack-merge');

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const webPackCommon = require('./webpack.common');
const { dependencies } = require('../package.json');

const devConfig = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    // para webpack entender a extensão jsx
    // se for usar tsx tambem precisa colocar aqui
  },
  devServer: {
    static: {
      directory: './public',
    },
    port: 4050,
    hot: true,
    open: true,
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'App',
      remotes: {
        marketing: 'marketing@http://localhost:3050/remoteEntry.js',
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(webPackCommon, devConfig);
