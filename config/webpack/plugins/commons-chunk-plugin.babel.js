export default (name) => ({
  name,
  minChunks: Infinity,
  filename: '[name].js',
});
