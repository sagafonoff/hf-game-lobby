const { ProvidePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("./helpers");

/** @type {import('webpack').Configuration} */
module.exports = {
  // Where webpack looks to start building the bundle
  entry: {
    app: `${paths.src}/index.tsx`,
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    assetModuleFilename: "images/[name][ext]",
    publicPath: "/",
  },

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use SWC to transpile JavaScript files
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".json"],
        },
        loader: "swc-loader",
      },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|ttf|svg|)$/, type: "asset/inline" },
    ],
  },

  resolve: {
    extensions: [".json", ".ts", ".tsx", "..."],
    modules: [paths.src, "node_modules"],
    alias: {
      "@app": `${paths.src}/app`,
      "@assets": [`${paths.src}/assets`],
      "@config": [`${paths.src}/config`],
      "@domain": [`${paths.src}/domain`],
      "@services": [`${paths.src}/services`],
    },
  },

  // Customize the webpack build process
  plugins: [
    // Automatically import react where needed
    new ProvidePlugin({
      React: "react",
    }),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: ".",
          globOptions: {
            ignore: ["*.DS_Store", "**/*.html"],
          },
        },
      ],
    }),

    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      template: `${paths.public}/index.html`,
      favicon: "./public/favicon.ico",
    }),
  ],
};
