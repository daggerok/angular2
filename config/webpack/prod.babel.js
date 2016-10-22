import webpack from 'webpack';
import config from './common.babel';

const vendor = 'vendor';

config.devtool = '#source-map';

config.plugins = [
  ...config.plugins,
  new webpack.optimize.CommonsChunkPlugin(
    // chunkName=
    vendor,
    // filename=
    `vendor/${vendor}.js`
  ),
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    mangle: {
      keep_fnames: true
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'ENV': JSON.stringify('production')
    }
  }),
];

export default config;
