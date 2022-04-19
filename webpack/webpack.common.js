const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/scripts/index.ts"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
    assetModuleFilename: "assets/[name]-[hash][ext]",
  },
};
