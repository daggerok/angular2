import config from './common.babel';
import devServer from './devServer.babel';

config.output.sourceMapFilename = 'maps/[file].map';

export default {
  ...config,
  devServer,
  devtool: 'cheap-module-eval-source-map',
};
