const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WebpackStripLoader = require('strip-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const packageJson = require('./package.json');
const PATHS = {
    app: path.join(__dirname, 'src/'),
    public: path.join(__dirname, 'public'),
    dist: path.join(__dirname, 'dist'),
    template: path.join(__dirname, 'index.html')
};

let config = null;

const entry = {
    app: ['babel-polyfill', `${PATHS.app}/index.js`]
};

const resolve = {
    modules: [
        path.resolve('./src'),
        path.resolve('./node_modules')
    ]
};

const babelFrontend = {
    test: /\.jsx?$/,
    include: PATHS.app,
    loader: 'babel-loader',
    query: {
        presets: ['es2016', 'es2015', 'react']
    }
}

const babelBackend = {
    test: /\.jsx?$/,
    include: PATHS.public,
    loader: 'babel-loader',
    query: {
        presets: ['es2016', 'es2015']
    }
}

const packageName = new webpack.DefinePlugin({
    NAME: JSON.stringify(packageJson.name)
})

const stripConsoleLog = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: WebpackStripLoader.loader('console.log')
}

const cleanBuildDir = new CleanWebpackPlugin([PATHS.dist], {
    root: __dirname,
    verbose: true,
    dry: false
});

const copyFiles = new CopyWebpackPlugin([
    {
        from: `${PATHS.public}/fonts`,
        to: `${PATHS.dist}/fonts`
    },
    {
        from: `${PATHS.public}/icon96x96.png`,
        to: `${PATHS.dist}/.`
    },
    {
        from: `${PATHS.public}/icon144x144.png`,
        to: `${PATHS.dist}/.`
    },
    {
        from: `${PATHS.public}/icon192x192.png`,
        to: `${PATHS.dist}/.`
    },
    {
        from: `${PATHS.public}/manifest.json`,
        to: `${PATHS.dist}/.`
    },
    {
        from: `${__dirname}/package.json`,
        to: `${PATHS.dist}/.`
    }
]);

const devtool = 'eval-source-map';

const devServer = (env) => {
    return {
        inline: true,
        port: env.PORT,
        contentBase: PATHS.public,
        proxy: {
            '/api': {
                target: `http://localhost:${env.API_PORT}/`
            }
        }
    }
};

if (process.env.NODE_ENV === 'prod') {

    config = [

        // Frontend config
        {
            entry,
            output: {
                path: PATHS.dist,
                publicPath: '/',
                filename: 'bundle.js'
            },
            resolve,
            module: {
                loaders: [babelFrontend, stripConsoleLog]
            },
            plugins: [
                packageName,
                cleanBuildDir,
                copyFiles,
                new HtmlWebpackPlugin({
                    hash: false,
                    filename: 'index.html',
                    template: PATHS.template,
                })
            ]
        },

        // Server config
        {
            entry: [
                `${PATHS.public}/server.js`
            ],
            output: {
                path: PATHS.dist,
                filename: 'server.js'
            },
            module: {
                loaders: [babelBackend]
            },
            target: 'node',
            externals: [nodeExternals()]
        },

        // Service Worker config
        {
            entry: [
                `${PATHS.public}/service-worker.js`
            ],
            output: {
                path: PATHS.dist,
                filename: 'service-worker.js'
            },
            module: {
                loaders: [babelBackend]
            },
            target: 'node',
            externals: [nodeExternals()]
        }
    ]

} else {

    config = (env) => {
        return {
            entry,
            output: {
                path: PATHS.public,
                publicPath: '/',
                filename: 'bundle.js'
            },
            resolve,
            devtool,
            devServer: devServer(env),
            module: {
                loaders: [babelFrontend]
            },
            plugins: [
                packageName,
                new HtmlWebpackPlugin({
                    hash: true,
                    filename: 'index.html',
                    template: PATHS.template,
                })
            ]
        }
    }

}

module.exports = config;