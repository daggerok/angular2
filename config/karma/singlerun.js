// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
const common = require('./common');

module.exports = function (config) {
  config.set(Object.assign({}, common, {
    singleRun: true
  }));
};
