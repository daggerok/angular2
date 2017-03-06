export default env => ({
  chunks: [ // order in array doesn't matters, added in order, just for readability...
    // commons.js: commons code from all entries, ie: commons(polyfills, vendors, app)
    'commons',
    // polyfills.js: commons code from polyfills and vendors entries - commons.js, , ie: commons(polyfills, vendors) - commons.js
    'polyfills',
    // vendors.js: commons code from (vendors and app entries) - commons.js - polyfills.js
    'vendors',
    // app.js: only application code without polyfills, vendors, other boilerplate's and commons
    'app',
  ],
  filename: 'index.html',
  favicon: './src/assets/favicon.ico',
  template: './src/assets/index.html',
  minify: env !== 'development' ? {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true,
  } : false,
});
