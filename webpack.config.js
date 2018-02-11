// Node imports
const path = require('path');

// Webpack related imports
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// const ENV = process.env.npm_lifecycle_event;
// const isServe = ENV === 'serve';
// const isTest = ENV === 'test';

//  const packageName = "TokenService"; //use only to export a default service
const distFileName = "[name].js";

// Webpack configuration
const config = {

    entry: {
        "token.service": "./src/index.js",
        "token.service.min": "./src/index.js"
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: distFileName,
        libraryTarget: 'umd',        
        // library: packageName, //use only to export a default service
        // umdNamedDefine: true, //use only to export a default service
    },

    //
    // Loaders: pre-process individual files
    //
    module: {
        rules: [
            {   
                test: /\.json$/, 
                use: 'json-loader' 
            },
            // ES6 to ES5 transpiling
            {
                test: /\.js$/, // regexp to match what the loader will be applied to
                use: 'babel-loader', // what loader(s) to use
                exclude: /node_modules/,
            }
        ],
    },

    //
    // Plugins: post-process bundled file
    //
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV), // read the value provided by package.json 'build' script and store it to use it inside our app or by vendor libraries
        }),
    ],

    // devserver hot-reload
    devServer: {
        inline: true,
    },

    devtool: 'source-map',
};

module.exports = config;
