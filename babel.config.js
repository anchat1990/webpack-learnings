module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry"
      }
    ],
    "@babel/preset-react"
  ];

  const plugins = ["react-hot-loader/babel"];

  return {
    presets,
    plugins
  };
};
