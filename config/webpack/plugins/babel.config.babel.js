export default {
  presets: [
    [ 'es2015', { modules: false, }, ], // can be false or amd, umd, systemjs, commonjs
    'stage-0',
  ],
  plugins: [
    'transform-class-properties',
    'syntax-dynamic-import',
    'add-module-exports',
  ],
};
