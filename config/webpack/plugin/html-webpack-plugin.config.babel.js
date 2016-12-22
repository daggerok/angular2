export default (isProdOrGhPages) => ({
  chunksSortMode: 'none',
  filename: 'index.html',
  favicon: './src/assets/favicon.ico',
  template: './src/assets/index.html',
  minify: !isProdOrGhPages ? false : {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
    },
});
