module.exports = {
  injectChanges: false,
  watchOptions: {
    ignored: 'node_modules',
  },
  server: {
    baseDir: './dist',
  },
  serveStatic: [
    './dist',
  ],
};
