import {
  pathTo,
  publicPath,
} from './utils.babel';

const staticDir = './dist';

export default env => ({
  publicPath: publicPath(env),
  path: pathTo(staticDir),
  filename: '[name].js',
  sourceMapFilename: '[file].map',
  chunkFilename: '[id].chunk.js',
  jsonpFunction: 'w',
});
