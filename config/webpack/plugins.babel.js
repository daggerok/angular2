import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
import CompressionWebpackPlugin from 'compression-webpack-plugin';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';
import { BaseHrefWebpackPlugin } from 'base-href-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { AotPlugin } from '@ngtools/webpack';
import {
  ContextReplacementPlugin,
  NoEmitOnErrorsPlugin,
  LoaderOptionsPlugin,
  ProvidePlugin,
  DefinePlugin,
  optimize,
} from 'webpack';
const {
  AggressiveMergingPlugin,
  CommonsChunkPlugin,
  UglifyJsPlugin,
} = optimize;

import aotPluginConfig from './plugins/aot-plugin.config.babel';
import baseHrefWebpackPluginConfig from './plugins/base-href-webpack-plugin.config.babel';
import uglifyJsPluginConfig from './plugins/uglify-js-plugin';
import compressionWebpackPluginConfig from './plugins/compression-webpack-plugin.config.babel';
import scriptExtHtmlWebpackPluginConfig from './plugins/script-ext-html-webpack-plugin.config.babel';
import extractTextWebpackPluginConfig from './plugins/extract-text-webpack-plugin.config.babel';
import providePluginConfig from './plugins/provide-plugin.config.babel';
import definePluginConfig from './plugins/define-plugin.config.babel';
import htmlWebpackPluginConfig from './plugins/html-webpack-plugin.config.babel';
import loaderOptionsPluginConfig from './plugins/loader-options-plugin.config.babel';

import { pathTo } from './utils.babel';

export default env => [
  // Fixes Angular 2 error ?
  new ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
    pathTo('./src')
  ),
  new ProgressBarWebpackPlugin(),
  new ProvidePlugin(providePluginConfig),
  new DefinePlugin(definePluginConfig(env)),
  new HtmlWebpackPlugin(htmlWebpackPluginConfig(env)),
  new BaseHrefWebpackPlugin(baseHrefWebpackPluginConfig(env)),
  new ExtractTextWebpackPlugin(extractTextWebpackPluginConfig(env)),
  new CommonsChunkPlugin({ names: ['app', 'vendors', 'polyfills'] }),
  new LoaderOptionsPlugin(loaderOptionsPluginConfig(env)),
  env === 'development' ? new NoEmitOnErrorsPlugin() : undefined,
  env !== 'development' ? new AggressiveMergingPlugin() : undefined,
  env !== 'development' ? new AotPlugin(aotPluginConfig) : undefined,
  env !== 'development' ? new UglifyJsPlugin(uglifyJsPluginConfig) : undefined,
  env !== 'development' ? new CompressionWebpackPlugin(compressionWebpackPluginConfig) : undefined,
  env !== 'development' ? new ScriptExtHtmlWebpackPlugin(scriptExtHtmlWebpackPluginConfig) : undefined,
].filter(plugin => !!plugin);
