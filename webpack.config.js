const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    devtool: "inline-source-map",
    devServer: {
        port: 8082,
        liveReload: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Restaurant Page | Odin Project",
            template: "./src/index.html"
        })
    ],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    optimization: {
        runtimeChunk: "single"
    },
    target: "web"
}