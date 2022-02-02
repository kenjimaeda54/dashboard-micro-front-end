const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const common = require("./webpack.common");
const { dependencies } = require("../package.json");

//para produção nao importo com o html
//porque a ideia e so expor o componente o html sera o container

const productionConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    //isso e por causa do amazon aw3
    publicPath: "/marketing/latest/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketApp": "./src/bootstrap.js",
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(common, productionConfig);
