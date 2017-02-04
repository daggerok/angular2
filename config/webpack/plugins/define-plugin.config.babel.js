export default isProdOrGhPages => ({
  'process.env': {
    'DEVELOPMENT': !isProdOrGhPages,
    'NODE_ENV': JSON.stringify(isProdOrGhPages ? 'production' : 'development'),
  },
});
