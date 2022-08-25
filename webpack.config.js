const path = require('path');

module.exports = {
    mode: 'development',
    entry: '/src/js/main.js',
    devtool: "source-map",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}