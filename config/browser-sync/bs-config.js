// browser-sync generated default config
const config = require('./common-bs-config.js');

// all requests to /api/** => will redirect on http://localhost:8080/api/**
const httpProxyMiddleware = require('http-proxy-middleware');
const proxy = httpProxyMiddleware('/api', {
  target: 'http://localhost:8080',
  changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug'
});

// fallback for react-routes
const historyApiFallback = require('connect-history-api-fallback');
const staticDir = './dist';
const publicPath = '/';

module.exports = Object.assign({}, config, {
  server: {
    always: 'index.html',
    baseDir: staticDir,
    middleware: [
      proxy,
      historyApiFallback({
        index: publicPath,
      }),
    ],
  },
  files: [
    './dist/index.html',
    './dist/**/*.*',
  ],
  startPath: publicPath,
  serveStatic: [
    staticDir,
  ],
});
