const proxy = () => ({
  target: 'http://localhost:8080',
  secure: false,
});

export default {
  port: 8000,
  inline: true,
  stats: 'minimal',
  contentBase: './src',
  historyApiFallback: true,
  proxy: {
    '/api': proxy(),
  },
};
