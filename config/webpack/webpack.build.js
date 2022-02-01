const { merge } = require("webpack-merge");

const common = require("./webpack.common");
const paths = require("../scripts/paths");

/** @type {import('webpack').Configuration} */
module.exports = merge(common, {
  mode: "production",
  devtool: false,

  output: {
    clean: true,
    path: paths.build,
    filename: "js/[name].[contenthash].bundle.js",
    publicPath: "/",
  },

  optimization: {
    runtimeChunk: {
      name: "runtime",
    },
  },
});
