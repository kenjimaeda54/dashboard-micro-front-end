const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const webPackCommon = require("./webpack.common");
const { dependencies } = require("../package.json");

const devConfig = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:2050/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    // para webpack entender a extensão jsx
    // se for usar tsx tambem precisa colocar aqui
  },
  devServer: {
    port: 2050,
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
    //quando o historyFallBack nao encontrar o html
    //ou as imagens coloca uma barra
    //no meu caso a tela ficava em branco
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthApp": "./src/bootstrap.js",
      },
      // compartilhando as dependências aqui diminuo bastante o tamanho do arquivo
      // quando bate com as dependências do container se for igual ele vai decidir usar apenas um
      shared: dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "Auth React",
    }),
  ],
};

module.exports = merge(webPackCommon, devConfig);
