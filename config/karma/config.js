// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

const webpackTestConfig = require('../webpack/test');
const path = require('path');
//const entry = path.resolve(webpackTestConfig.entry);

webpackTestConfig.module.postLoaders = [{
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'istanbul-instrumenter'
}];

module.exports = {

  // base path that will be used to resolve all patterns (eg. files, exclude)
  basePath: '../..',

  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  frameworks: ['jasmine'],

  // list of files to exclude
  exclude: [],

  // Continuous Integration mode
  // if true, Karma captures browsers, runs the tests and exits
  // singleRun: false,
  singleRun: true,

  // Concurrency level
  // how many browser should be started simultaneous
  concurrency: Infinity,

  plugins: [
    require('karma-coverage'),
    require('karma-webpack'),
    require('karma-jasmine'),
    require('karma-chrome-launcher'),
    require('karma-remap-istanbul'),
  ],

  // list of files / patterns to load in the browser
  files: [
    {
      pattern: './src/test.ts',
      watched: false
    }
  ],

  // preprocess matching files before serving them to the browser
  // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
  preprocessors: {
    './src/test.ts': [
      'webpack'
    ]
  },

  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: [
    'progress',
    'karma-remap-istanbul',
    'coverage'
  ],

  remapIstanbulReporter: {
    reports: {
      html: 'coverage',
      lcovonly: './coverage/coverage.lcov'
    }
  },

  coverageReporter: {
    type: 'text'
  },

  // web server port
  port: 9876,

  // enable / disable colors in the output (reporters and logs)
  colors: true,

  // level of logging
  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
  //logLevel: config.LOG_INFO,
  logLevel: this.LOG_INFO,

  // enable / disable watching file and executing tests whenever any file changes
  autoWatch: true,

  // start these browsers
  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  browsers: [
    'Chrome'
  ],

  webpack: webpackTestConfig,
};