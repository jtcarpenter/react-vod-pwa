const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WebpackStripLoader = require('strip-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const packageJson = require('./package.json');
const PATHS = {
    src: path.join(__dirname, 'src/'),
    public: path.join(__dirname, 'public'),
    dist: path.join(__dirname, 'dist'),
    template: path.join(__dirname, 'index.html')
};

let config = null;

const entry = {
    app: ['babel-polyfill', `${PATHS.src}/index.js`]
};

const resolve = {
    modules: [
        path.resolve('./src'),
        path.resolve('./node_modules')
    ]
};

const babelFrontend = {
    test: /\.jsx?$/,
    include: PATHS.src,
    loader: 'babel-loader',
    query: {
        presets: ['es2016', 'es2015', 'react']
    }
}

const babelBackend = {
    test: /\.js$/,
    include: PATHS.public,
    loader: 'babel-loader',
    query: {
        presets: ['es2016', 'es2015']
    }
}

const babelServiceWorker = {
    test: /\.js$/,
    include: PATHS.src,
    loader: 'babel-loader',
    query: {
        presets: ['es2016', 'es2015']
    }
}

const packageName = new webpack.DefinePlugin({
    NAME: JSON.stringify(packageJson.name)
});

const packageVersion = new webpack.DefinePlugin({
    VERSION: JSON.stringify(packageJson.version)
});

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

const copyFonts = [
    {
        from: `${PATHS.public}/fonts`,
        to: `${PATHS.dist}/fonts`
    }
];

const copyIcons = [
    {
        from: `${PATHS.public}/icon-192x192.png`,
        to: `${PATHS.dist}/.`
    },
    {
        from: `${PATHS.public}/icon-256x256.png`,
        to: `${PATHS.dist}/.`
    },
    {
        from: `${PATHS.public}/icon-384x384.png`,
        to: `${PATHS.dist}/.`
    },
    {
        from: `${PATHS.public}/icon-512x512.png`,
        to: `${PATHS.dist}/.`
    }
];

const copyManifest = [
    {
        from: `${PATHS.public}/manifest.json`,
        to: `${PATHS.dist}/.`
    }
];

const copyPackage = [
    {
        from: `${__dirname}/package.json`,
        to: `${PATHS.dist}/.`
    }
];

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
                filename: `bundle-${packageJson.version}.js`
            },
            resolve,
            module: {
                loaders: [babelFrontend, stripConsoleLog]
            },
            plugins: [
                packageName,
                packageVersion,
                cleanBuildDir,
                new CopyWebpackPlugin(
                    Array.prototype.concat(
                        copyFonts,
                        copyIcons,
                        copyManifest,
                        copyPackage
                    )
                ),
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
                loaders: [babelBackend, stripConsoleLog]
            },
            target: 'node',
            externals: [nodeExternals()]
        },

        // Service Worker config
        {
            entry: [
                `${PATHS.src}/service-worker.js`
            ],
            output: {
                path: PATHS.dist,
                filename: 'service-worker.js'
            },
            module: {
                loaders: [babelServiceWorker, stripConsoleLog]
            },
            plugins: [packageVersion]
        }
    ]

} else {

    config = (env) => {
        return [

            // Frontend config
            {
                entry,
                output: {
                    path: PATHS.public,
                    publicPath: '/',
                    filename: `bundle-${packageJson.version}.js`
                },
                resolve,
                devtool,
                devServer: devServer(env),
                module: {
                    loaders: [babelFrontend]
                },
                plugins: [
                    packageName,
                    packageVersion,
                    new HtmlWebpackPlugin({
                        hash: true,
                        filename: 'index.html',
                        template: PATHS.template,
                    })
                ]
            },

            // Service Worker config
            {
                entry: [
                    `${PATHS.src}/service-worker.js`
                ],
                output: {
                    path: PATHS.public,
                    filename: 'service-worker.js'
                },
                module: {
                    loaders: [babelServiceWorker]
                },
                plugins: [packageVersion]
            }

        ]
    }

}

module.exports = config;