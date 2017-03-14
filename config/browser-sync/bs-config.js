const config = require('./common-bs-config.js');

const httpProxyMiddleware = require('http-proxy-middleware');
const proxy = httpProxyMiddleware('/api', {
  target: 'http://localhost:8080',
  changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug'
});

const historyApiFallback = require('connect-history-api-fallback');

const webpackConfig = require('../webpack.config')(null);
const output = (webpackConfig || { output: {
  path: './dist',
  publicPath: '/',
}, }).output;

const staticDir = output.path;
const publicPath = output.publicPath;

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
