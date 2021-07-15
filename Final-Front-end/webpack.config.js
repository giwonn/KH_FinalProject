const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const port = process.env.PORT || 3000;

module.exports = (env, options) => {
  const config = {
    resolve: {
      extensions: [".js", ".jsx"],
    },
    entry: "./src/index",
    output: {
      filename: "bundle.[fullhash].js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: {
                minimize: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: {
            loader: "url-loader",
            options: {
              name: "[name].[ext]?[hash]",
              limit: 10000,
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
        templateParameters: {
          env: "asdf",
        },
      }),
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
    ],
  };
  //================= end config

  if (options.mode === "development") {
    config.devServer = {
      host: "localhost", // 개발 서버의 url
      port: port, // basically 3000
      open: false, // 서버 실행시 브라우저 자동 실행할건지
      hot: true,
      historyApiFallback: true,
    };

    //================== end dev mode ================== //
  } else {
    config.devServer = {
      host: "0.0.0.0", // url
      port: port,
      open: false,
      historyApiFallback: true,
      disableHostCheck: true,
    };
    config.plugins = [...config.plugins, new CleanWebpackPlugin()];
  }
  return config;
};
