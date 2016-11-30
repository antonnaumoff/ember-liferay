module.exports = {
    entry: "./app/app.jsx",
    output: {
        filename: "../js/main.js"
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};