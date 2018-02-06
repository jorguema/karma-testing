const path = require('path');
process.noDeprecation = true

module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['Chrome', 'IE'],
    frameworks: ['jasmine'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'test/**/*.js'
    ],
    preprocessors: {
      'app/custom-module.js': ['webpack', 'sourcemap'],
      'test/**/*.js': ['webpack', 'sourcemap','jshint']      
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              plugins: ['transform-decorators-legacy', 'transform-regenerator'],
              presets: ['es2015', 'stage-1']
            }
          },
          {
            test: /\.json$/,
            loader: 'json-loader',
          },
        ]
      }
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['kjhtml'],
    
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
  });
};