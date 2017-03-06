import { isProd } from '../utils.babel';

export default env => ({
  'process.env': {
    NODE_ENV: JSON.stringify(isProd(env) ? env : 'development'),
  },
});
