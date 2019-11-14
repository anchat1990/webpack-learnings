const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry: { home: "./app.js", about: "./app.js", contact: "./app.js" },
  // entry: { home: "./app.js" },  // Use the app.js entry
  mode: "development",
  entry: { home: ["react-hot-loader/patch", "./entry.js"] }, // Use the react entry point
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom" // only do this for development
    }
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    globalObject: "this",
    library: "App",
    libraryTarget: "umd"
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            rootMode: "upward" // look for babel config upwards
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      template: require("html-webpack-template"), // in node run require.resolve("html-webpack-template")
      inject: false,
      appMountId: "my-react-app",
      appMountHtmlSnippet: "<span>This is a HTML snippet</span>"
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV) // sets react env to production
    })
  ]
};
