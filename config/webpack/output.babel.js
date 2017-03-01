import {
  pathTo,
  publicPath,
} from './utils.babel';
import { version } from '../../package.json';

export const suffix = `v=${version}`;
const staticDir = './dist';

export default env => ({
  publicPath: publicPath(env),
  path: pathTo(staticDir),
  filename: `[name].js?${suffix}`,
  sourceMapFilename: `[file].map?${suffix}`,
  chunkFilename: `[id].chunk.js?${suffix}`,
  jsonpFunction: 'w',
});
