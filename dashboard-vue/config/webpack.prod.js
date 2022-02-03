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
    publicPath: "/dashboard/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardApp": "./src/bootstrap.js",
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(common, productionConfig);
