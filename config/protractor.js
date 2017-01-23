const SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 30000,

  specs: [
    '../e2e/**/*.e2e-spec.ts',
  ],

  capabilities: {
    browserName: 'chrome',
  },

  directConnect: true,
  chromeOnly: true,

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {},
  },

  useAllAngular2AppRoots: true,

  beforeLaunch: function() {
    require('ts-node').register({
      project: './e2e',
    });
  },

  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
  },
};
