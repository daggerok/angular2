import precss from 'precss';
import autoprefixer from 'autoprefixer';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';

import {
  pathTo,
  isProd,
  publicPath,
} from './utils.babel';
import { suffix } from './output.babel';
import babelConfig from './plugins/babel.config.babel';

const include = pathTo('./src');

const includes = [
  include,
  pathTo('./node_modules/normalize.css/'),
  pathTo('./node_modules/font-awesome/'),
  pathTo('./node_modules/primeng/resources/'),
  pathTo('./node_modules/angular/'),
  pathTo('./node_modules/bootstrap/'),
  pathTo('./node_modules/bootswatch/'),
  pathTo('./node_modules/semantic-ui-css/'),
];

const resources = pathTo('./src/resources');

export const exclude = /\/(node_modules|bower_components)\//i;
const assets = /\.(raw|gif|png|jpe?g|otf|eot|woff2?|ttf|svg|ico)$/i;

const use = env => [
  {
    loader: 'css-loader',
    options: {
      // module: true, // todo?
      importLoaders: 1,
      minimize: isProd(env),
      sourceMap: !isProd(env),
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: isProd(env) ? false : 'inline',
      plugins: () => [
        precss,
        autoprefixer,
      ],
    },
  },
];

const cssLoader = env => ExtractTextWebpackPlugin.extract({
  use: use(env),
  fallback: 'style-loader',
  publicPath: publicPath(env),
  // use: `css-loader?importLoaders=1${minimize(env)}!postcss-loader?sourceMap=inline`,
});

const stylusLoader = env => ExtractTextWebpackPlugin.extract({
  publicPath: publicPath(env),
  fallback: 'style-loader',
  use: [
    ...use(env),
    'stylus-loader',
  ],
});

export default env => ({
  rules: [
    {
      enforce: 'pre',
      test: /\.ts$/i,
      include,
      loader: 'tslint-loader',
    },
    isProd(env) ? undefined : {
      enforce: 'pre',
      test: /\.ts$/i,
      include,
      loader: 'source-map-loader',
    },
    //
    {
      test: /\.ts$/i,
      include,
      loaders: isProd(env) ? [
        '@ngtools/webpack',
      ] : [
        'awesome-typescript-loader',
        'angular2-template-loader',
        'angular2-router-loader',
      ],
    },
    {
      test: /\.js$/i,
      include,
      loader: 'babel-loader',
      options: babelConfig,
    },
    //
    {
      test: /\.html$/i,
      include,
      loader: 'raw-loader',
    },
    //
    {
      test: /\.css$/i,
      include: includes,
      use: cssLoader(env),
    },
    {
      test: /\.styl$/i,
      include: includes,
      use: stylusLoader(env),
    },
    //
    {
      test: assets,
      include: resources,
      // loader: `file-loader?name=resources/[1]?${suffix}&regExp=src/resources/(.*)`,
      use: {
        loader: 'file-loader',
        options: {
          name: `resources/[1]?${suffix}`,
          regExp: /\/src\/resources\/(.*)/,
        },
      },
    },
    {
      test: assets,
      include: [
        exclude,
        includes,
      ],
      exclude: include,
      use: {
        loader: 'file-loader',
        options: {
          name: `vendors/[1]?${suffix}`,
          regExp: /\/node_modules\/(.*)/,
        },
      },
    },
    {
      test: assets,
      exclude: [
        exclude,
        resources,
      ],
      use: {
        loader: 'file-loader',
        options: {
          name: `[path]/[name].[ext]?${suffix}`,
        },
      },
    },

  ].filter(rule => !!rule),

  noParse: [
    /.+zone\.js\/dist\/.+/,
    /.+angular2\/bundles\/.+/,
  ],
});
