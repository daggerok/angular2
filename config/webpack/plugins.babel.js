import {
  NoErrorsPlugin,
  ProvidePlugin,
  DefinePlugin,
  optimize,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import CompressionWebpackPlugin from 'compression-webpack-plugin';

import { vendors } from './entry.babel';
import { extractCSS } from './module.babel';
import { isProdOrGhPages } from './env.babel';
import commonsChunkPluginConfig from './plugins/commons-chunk-plugin.babel';
import compressionWebpackPluginConfig from './plugins/compression-webpack-plugin.config.babel';
import definePluginConfig from './plugins/define-plugin.config.babel';
import htmlWebpackPluginConfig from './plugins/html-webpack-plugin.config.babel';
import providePluginConfig from './plugins/provide-plugin.config.babel';
import uglifyJsPluginConfig from './plugins/uglify-js-plugin.config.babel';

const {
  AggressiveMergingPlugin,
  OccurenceOrderPlugin,
  CommonsChunkPlugin,
  UglifyJsPlugin,
  DedupePlugin,
} = optimize;

const prodPlugins = isProdOrGhPages ? [
  new DedupePlugin(),
  new AggressiveMergingPlugin(),
  new UglifyJsPlugin(uglifyJsPluginConfig(isProdOrGhPages)),
  new CompressionWebpackPlugin(compressionWebpackPluginConfig),
  new ScriptExtHtmlWebpackPlugin({ defaultAttribute: 'defer' }),
  new CommonsChunkPlugin(commonsChunkPluginConfig(vendors)),
] : [];

export default [
  extractCSS,
  new OccurenceOrderPlugin(true),
  new ProvidePlugin(providePluginConfig),
  isProdOrGhPages ? undefined : new NoErrorsPlugin(),
  new DefinePlugin(definePluginConfig(isProdOrGhPages)),
  new HtmlWebpackPlugin(htmlWebpackPluginConfig(isProdOrGhPages)),
  ...prodPlugins,
].filter(plugin => !!plugin);
