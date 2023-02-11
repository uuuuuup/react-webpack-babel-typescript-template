const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2|ttf|svg|ico)$/i,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "build"),
    port: 8088,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `public/index.html`,
    }),
    new CleanWebpackPlugin(),
  ],
};
