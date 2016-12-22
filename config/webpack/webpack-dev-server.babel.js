import { publicPath } from './output.babel';

const devServer = {
  port: 8000,
  inline: true,
  progress: true,
  stats: 'minimal',
  contentBase: './src',
  historyApiFallback: {
    index: publicPath,
  },

  proxy: {
    "/api": {
      target: "http://localhost:8080",
      secure: true,
    },
  },
};

export default devServer;
