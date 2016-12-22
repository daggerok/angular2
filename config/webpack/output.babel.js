import ENV_NODE from './env.babel';

export const publicPath = 'ghpages' == ENV_NODE ? '/angular2/' : '/';
export const staticDir = './dist';

export default {
  publicPath,
  path: staticDir,
  filename: '[name].js',
  sourceMapFilename: 'maps/[file].map',
};
