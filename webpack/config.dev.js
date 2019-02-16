const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, args) => {
  return {
    mode: "development",
    entry: "./index.js",
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
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"]
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
      port: 3000
    },
    resolve: {
      modules: ["node_modules", path.resolve(__dirname, '../src')]
    }
  };
};
