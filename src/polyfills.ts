// Polyfills
// core-js
import 'core-js';
// ie-shim
import 'ie-shim';
import 'zone.js/dist/zone.js';
import 'ts-helpers';

if (process.env.ENV === 'development') {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
