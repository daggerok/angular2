import config from './prod.babel';
import output from './common/output.babel';

export default {
  ...config,
  output: {
    ...output,
    publicPath: '/angular2/',
  },
};
