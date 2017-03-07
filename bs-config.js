module.exports = {
  injectChanges: false,
  files: [
    './dist/*.*',
  ],
  watchOptions: {
    ignored: 'node_modules',
  },
  server: {
    baseDir: './dist',
  },
};
