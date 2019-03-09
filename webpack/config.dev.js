const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("@babel/polyfill");

module.exports = (env, args) => {
  return {
    mode: "development",
    entry: ["@babel/polyfill", "./index.js"],
    output: {
      filename: "app.js",
      path: path.join(__dirname, "../build"),
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.(jsx?)$/, ///\.(js|jsx)$/
          exclude: [/node_modules/],
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: ["last 2 versions"]
                  },
                  modules: false
                }
              ],
              "@babel/preset-react"
            ]
          }
        },
        {
          test: /\.(css)$/,
          // exclude: /node_modules/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: path.join(__dirname, "../public/index.html")
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, "../public"),
      hot: true,
      inline: true,
      port: 3000,
      historyApiFallback: true
    },
    resolve: {
      modules: ["node_modules", path.resolve(__dirname, "../src")]
    }
  };
};
