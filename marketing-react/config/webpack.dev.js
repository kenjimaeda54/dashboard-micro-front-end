const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webPackCommon = require("./webpack.common");

const devConfig = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
  },
  devServer: {
    static: {
      directory: "./public",
    },
    port: 3050,
    hot: true,
    open: true,
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "Marketing React",
    }),
  ],
};

module.exports = merge(webPackCommon, devConfig);
