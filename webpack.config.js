const path = require('path');

module.exports = {
    mode: 'development',
    entry: '/src/js/main.js',
    devtool: "source-map",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        
        ]
    }
}