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
      'app/**/*.js': ['webpack', 'sourcemap'],
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
    reporters: ['spec','kjhtml'],

    // reporter 'spec'
    specReporter: {
      maxLogLines: 5,             // limit number of lines logged per test
      suppressErrorSummary: true, // do not print error summary
      suppressFailed: false,      // do not print information about failed tests
      suppressPassed: false,      // do not print information about passed tests
      suppressSkipped: true,      // do not print information about skipped tests
      showSpecTiming: false,      // print the time elapsed for each spec
      failFast: false              // test would finish with error when a first fail occurs. 
    },


    plugins: [
      "karma-jasmine",
      "karma-webpack",
      "karma-jshint",
      "karma-jasmine-html-reporter",
      "karma-sourcemap-loader",
      "karma-babel-preprocessor",
      "karma-chrome-launcher",
      "karma-ie-launcher",
      "karma-spec-reporter"
    ],
    
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
  });
};