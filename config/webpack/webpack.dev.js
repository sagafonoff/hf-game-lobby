const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const common = require("./webpack.common");
const paths = require("../scripts/paths");

/** @type {import('webpack').Configuration} */
module.exports = merge(common, {
  // Set the mode to development or production
  mode: "development",

  // Control how source maps are generated
  devtool: "inline-source-map",

  // Spin up a server for quick development
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000,
    static: {
      directory: paths.build,
      publicPath: paths.public,
      watch: {
        ignored: /node_modules/,
        poll: 1000,
      },
    },
  },

  plugins: [
    // Enable Hot Module Replacement
    new ReactRefreshWebpackPlugin(),
  ],
});
