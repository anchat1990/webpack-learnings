module.exports = {
  entry: { app: "./app.js" },
  output: {
    path: __dirname + "/dist/umd",
    filename: "[name].js",
    globalObject: "this",
    library: "App",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
