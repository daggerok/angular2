import { pathTo, isProd } from '../utils.babel';
import babel from './babel.config.babel';
import postcss from './postcss.config.babel';
import tslint from './tslint.config.babel';

export default env => ({
  options: {
    context: pathTo('.'),
    babel,
    postcss,
    tslint: tslint(env),
  },
  minimize: isProd(env),
  debug: !isProd(env),
});
