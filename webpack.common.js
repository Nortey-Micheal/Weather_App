const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    devServer: {
        watchFiles: ["./src/index.html","index.css"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "JsWebPackTemplate",
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"],
            },
            {
                test: /\.(png|jpg|svg|jpeg|gif|avif|webp)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(ttf|twoff)$/i,
                type: "asset/resource",
            }
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"dist"),
        clean: true,
    }
};