import { resolve } from 'path';

export const pathTo = rel => resolve(process.cwd(), rel);
export const isProd = env => env === 'production' || env === 'ghpages';
export const publicPath = env => env === 'ghpages' ? '/angular2/' : '/';
