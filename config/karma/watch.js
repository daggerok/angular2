// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
module.exports = function(config) {
  config.set(Object.assign({}, require('./config'), {
    // overrides:
    singleRun: false,
    autoWatch: true,
  }));
};
