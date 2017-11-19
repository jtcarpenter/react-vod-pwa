const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const packageJson = require('./package.json');
const PATHS = {
    app: path.join(__dirname, 'src/'),
    public: path.join(__dirname, 'public'),
    template: path.join(__dirname, 'index.html')
};

const config = (env) => {
    return {
        entry: {
            app: ['babel-polyfill', `${PATHS.app}/index.js`]
        },
        output: {
            path: PATHS.public,
            publicPath: '/',
            filename: 'bundle.js'
        },
        resolve: {
            modules: [
                path.resolve('./src'),
                path.resolve('./node_modules')
            ]
        },
        devtool: 'eval-source-map',
        devServer: {
            inline: true,
            port: env.PORT,
            contentBase: PATHS.public,
            proxy: {
                '/api': {
                    target: `http://localhost:${env.API_PORT}/`
                }
            }
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
        },
        plugins: [
            new webpack.DefinePlugin({
                NAME: JSON.stringify(packageJson.name)
            }),
            new HtmlWebpackPlugin({
                hash: true,
                filename: 'index.html',
                template: PATHS.template,
            })
        ]
    }
}

module.exports = config;