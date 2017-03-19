const path = require('path');
const webpack = require('webpack');
const PATHS = {
    app: path.join(__dirname, 'src/'),
    public: path.join(__dirname, 'public')
};

module.exports = {
    entry: {
        app: ['babel-polyfill', PATHS.app + '/index.js']
    },
    output: {
        path: PATHS.public,
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
        port: 3333,
        contentBase: PATHS.public
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: PATHS.app,
                loader: 'babel-loader',
                query: {
                    presets: ['es2016', 'es2015', 'react']
                }
            }
        ]
    }
}