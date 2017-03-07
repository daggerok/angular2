import { publicPath } from '../utils.babel';
import { suffix } from '../output.babel';

export default env => ({
  disable: false,
  allChunks: true,
  publicPath: publicPath(env),
  filename: '[name].css?' + suffix,
});
