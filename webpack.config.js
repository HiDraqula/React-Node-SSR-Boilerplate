// const path = require('path');

// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
require("babel-polyfill");


module.exports = {
    mode: 'none',
    entry: {
        main: ["babel-polyfill", "./src/app.js"],
        // admin: ["babel-polyfill", "./cpanel/index.js"]
    },
    // plugins: [
        // new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     chunks: ['bundel'],
        //     template: './public/index.html'
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     chunks: ['admin'],
        //     template: './public/admin.html'
        // })
    // ],
    module: {
        rules: [
            { test: /\.js?$/, 
                loader: 'babel-loader', 
                options:{
                    presets:[
                        '@babel/preset-env',
                        {'plugins': ['@babel/plugin-proposal-class-properties']},
                    ]
                },
                exclude: /node_modules/ },
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] }
        ]
    },
    output: {
        // filename: '[name].[contenthash].js',
        filename: '[name].js',
        // path: __dirname + '/public/static/js'
        path: __dirname + '/assets'
    },
    optimization: {
        // runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            // maxInitialRequests: Infinity,
            // minSize: 0,
            // cacheGroups: {
            //     vendor: {
            //         test: /[\\/]node_modules[\\/]/,
            //         name(module) {
            //             // get the name. E.g. node_modules/packageName/not/this/part.js
            //             // or node_modules/packageName
            //             const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            //             // npm package names are URL-safe, but some servers don't like @ symbols
            //             return `npm.${packageName.replace('@', '')}`;
            //         },
            //     },
            // },
        },
    },
    watchOptions: {
        aggregateTimeout: 1000,
        poll: 500,
        ignored: /node_modules/,
    }
    // ,
    // devServer: {
    //     inline: true,
    //     port: 5100
    // }
};