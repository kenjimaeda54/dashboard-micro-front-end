const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-runtime',
              [
                'babel-plugin-styled-components',
                {
                  minify: false,
                  transpileTemplateLiterals: false,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(JPG|JPEG|PNG)$/i,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Your store',
    }),
  ],
};
