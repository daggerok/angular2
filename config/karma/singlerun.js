// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

const commonConfig = require('./config');

// overrides:
commonConfig.singleRun = true;

module.exports = function(config) {
  config.set(commonConfig);
};
