const env = (process.env || {});
export const NODE_ENV = env.NODE_ENV;
export const isDev = 'development' === NODE_ENV;
export const isProd = 'production' === NODE_ENV;
export const isGhPages = 'ghpages' === NODE_ENV;
export default NODE_ENV;
