var webpack = require('webpack');
var extend = require('node.extend');
var path = require('path');
var browserSyncPlugin = require('browser-sync-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var buildPath = path.join(__dirname, 'target/build');

/**
 * Gemeinsame Konfigurationsdatei fuer Webpack (der Teil, der fuer alle Umgebungen gleich ist)
 * @type {} Webpack Konfiguration
 */
var commonConfig = exports.commonConfig = {
    context: path.resolve(__dirname, 'src/app'),
    // Einstiegspunkt fuer Webpack
    entry: {
        app: './app.js',
        vendor: [
            'angular',
            'angular-ui-router'
        ]
    },
    // Ausgabedatei
    output: {
        filename: 'bundle.js'
    },
    // Modulkonfiguration fuer alle Dateitypen, welcher Loader soll verwendet werden
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: [/node_modules/], loader: 'babel'
            }, {
                test: /\.html$/, loader: 'raw'
            }, {
                test: /\.css$/, loader: 'style!css'
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader'
            }, {
                test: /\.(woff|woff2)$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            }, {
                test: /\.ttf$/, loader: 'file-loader'
            }, {
                test: /\.eot$/, loader: 'file-loader'
            }
        ]
    },
    resolve: {
        fallback: path.join(__dirname, 'node_modules')
    },
    resolveLoader: {
        fallback: path.join(__dirname, 'node_modules')
    }
};

/**
 * Production Konfigurationsdatei fuer Webpack (der Teil, der nur fuer den produktiven Build ist)
 * @type {} Webpack Konfiguration
 */
exports.production = extend({}, commonConfig, {
    output: {
        path: buildPath
    }, plugins: [
        new ngAnnotatePlugin({add: true}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true, compress: {
                warnings: true
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'base.bundle.js')
    ], devtool: 'cheap-source-map'
});

/**
 * Development Konfigurationsdatei fuer Webpack (der Teil, der nur fuer den Development Build ist)
 * @type {} Webpack Konfiguration
 */
exports.development = extend({}, commonConfig, {
    output: {
        path: path.resolve(__dirname, 'dist')
    }, plugins: [
        new browserSyncPlugin({
            proxy: 'localhost:3000'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'base.bundle.js')
    ], watch: true, devtool: 'source-map'
});