const pat = require("path");

module.exports = {
  entry: {
    app: "./src/app.js",
    index: "./src/index.js",
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    path: pat.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
