const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // entry: { home: "./app.js", about: "./app.js", contact: "./app.js" },
  entry: { home: "./app.js" },
  mode: "development",
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    globalObject: "this",
    library: "App",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {}
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV) // sets react env to production
    })
  ]
};
