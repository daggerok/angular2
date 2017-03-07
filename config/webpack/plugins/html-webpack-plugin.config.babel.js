import { isProd } from '../utils.babel';

export default env => ({
  cache: true,
  showErrors: true,
  excludeChunks: [],
  xhtml: true,
  // // chunks: 'all',
  // chunks: [
  //   'manifest',
  //   'polyfills',
  //   'vendors',
  //   'app',
  // ],
  filename: 'index.html',
  favicon: './src/assets/favicon.ico',
  template: './src/assets/index.html',
  minify: isProd(env) ? {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true,
  } : false,
});
