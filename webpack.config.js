const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: '/src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist', 'js'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader",  "sass-loader"],
            },
        
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
           filename: path.join('..', 'css', 'style.css'),
        }),
        // new CssMinimizerPlugin(),
    ]
}