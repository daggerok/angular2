import {
  NoErrorsPlugin,
  ProvidePlugin,
  DefinePlugin,
  optimize,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

import { vendors } from './entry.babel';
import { extractCSS } from './module.babel';
import {
  isGhPages,
  isProd
} from './env.babel';

const prod = isProd || isGhPages;

const {
  AggressiveMergingPlugin,
  OccurenceOrderPlugin,
  CommonsChunkPlugin,
  UglifyJsPlugin,
  DedupePlugin,
} = optimize;

const prodPlugins = !prod ? [] : [
    new DedupePlugin(),
    new AggressiveMergingPlugin(),
    new UglifyJsPlugin({
      // https://github.com/angular/angular/issues/10618
      mangle: { keep_fnames: true, },
      // include: resolve('./src'), option can be used only with already minified vendors
      compress: { warnings: false, },
    }),
    new OccurenceOrderPlugin(true),
    new CommonsChunkPlugin({
      name: vendors,
      filename: `${vendors}.js`,
      minChunks: Infinity,
    }),
    new ScriptExtHtmlWebpackPlugin({ defaultAttribute: 'defer' }),
];

export default [
  extractCSS,
  prod ? undefined : new NoErrorsPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    favicon: './src/assets/favicon.ico',
    template: './src/assets/index.html',
    minify: !prod ? false : {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
    },
  }),
  new ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery',
  }),
  new DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(prod ? 'production' : 'development'),
    },
  }),
  ...prodPlugins,
].filter(plugin => !!plugin);
