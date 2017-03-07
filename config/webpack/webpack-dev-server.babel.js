import { pathTo, isProd, publicPath } from './utils.babel';

const proxy = () => ({
  target: 'http://localhost:8080',
  secure: false,
});

export default env => ({
  port: 8000,
  stats: 'minimal',
  contentBase: pathTo('./src'),
  inline: !isProd(env),
  compress: isProd(env),
  // historyApiFallback: true,
  historyApiFallback: {
    index: publicPath(env),
  },
  proxy: {
    '/api': proxy(),
  },
});
