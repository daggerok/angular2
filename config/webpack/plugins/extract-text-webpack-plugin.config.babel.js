import { publicPath } from '../utils.babel';

export default env => ({
  filename: '[name].css',
  disable: false,
  allChunks: true,
  publicPath: publicPath(env),
});
