import config from './common.babel';
import devServer from './devServer.babel';

config.output.sourceMapFilename = 'maps/[file].map';

export default {
  ...config,
  devServer,
  //devtool: '#source-map',
  devtool: 'cheap-module-eval-source-map',
};
