/* eslint-disable */
const webpackConfig = require('./webpack.config');
const faucet = require('faucet');

process.env.BABEL_ENV = 'test'; // so we load the correct babel plugins
require('babel-register');

module.exports = (config) => {
  config.set({
    plugins: [
      require('karma-webpack'),
      require('karma-tap'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-coverage'),
    ],
    basePath: '',
    frameworks: ['tap'],
    files: ['test/**/*.test.js'],
    exclude: [],
    preprocessors: {
      'test/**/*.test.js': ['webpack'],
      'src/**/*.js': ['webpack'],
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [
        { type: 'lcov', dir: 'coverage/', subdir: '.' },
        { type: 'json', dir: 'coverage/', subdir: '.' },
        { type: 'text-summary' },
      ],
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    singleRun: true,
  });
};
