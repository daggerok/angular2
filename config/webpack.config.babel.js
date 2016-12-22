import entry   from './webpack/entry.babel';
import output  from './webpack/output.babel';
import module  from './webpack/module.babel';
import resolve from './webpack/resolve.babel';
import plugins from './webpack/plugins.babel';
import postcss from './webpack/postcss.babel';
import node    from './webpack/node.babel';
import devServer from './webpack/webpack-dev-server.babel';
import {
  isDev,
  isProd,
} from './webpack/env.babel';

export default {
  entry,
  output,
  module,
  resolve,
  plugins,
  postcss,
  node,
  profile: 'web',
  devtool: isProd ? '#source-map' : '#eval',
  devServer: isDev ? devServer : isDev,
};
