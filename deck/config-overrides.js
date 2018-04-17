module.exports = function override(config, env) {
  config.module.rules[1].oneOf.unshift({
    test: /\.ex$/,
    use: "raw-loader",
    exclude: /node_modules/
  });

  return config;
};
