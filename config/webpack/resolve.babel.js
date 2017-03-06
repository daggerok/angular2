import { pathTo } from './utils.babel';

export default {
  modules: [
    pathTo('./src'),
    pathTo('node_modules'),
  ],
  extensions: [
    '.ts',
    '.js',
    '.css',
    '.styl',
  ],
};
