import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
import {
  pathTo,
  isProd,
  minimize,
  publicPath
} from './utils.babel';
import { suffix } from './output.babel';

const include = pathTo('./src');
const resources = pathTo('./src/resources');

export const exclude = /\/(node_modules|bower_components)\//;
const assets = /\.(raw|gif|png|jpg|jpeg|otf|eot|woff|woff2|ttf|svg|ico)$/i;

const cssLoader = env => ExtractTextWebpackPlugin.extract({
  fallback: 'style-loader',
  publicPath: publicPath(env),
  use: `css-loader?importLoaders=1${minimize(env)}!postcss-loader?sourceMap=inline`,
});
const stylusLoader = env => ExtractTextWebpackPlugin.extract({
  fallback: 'style-loader',
  publicPath: publicPath(env),
  use: `css-loader?importLoaders=2${minimize(env)}!postcss-loader?sourceMap=inline!stylus-loader`,
});

export default env => ({
  rules: [
    {
      test: /\.ts$/i,
      include,
      enforce: 'pre',
      loader: 'tslint-loader',
    },
    {
      test: /\.ts$/i,
      include,
      enforce: 'pre',
      loader: 'source-map-loader',
    },
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
      options: {
        presets: [
          [ 'es2015', { modules: false, }, ], // can be false or amd, umd, systemjs, commonjs
          'stage-0',
        ],
        plugins: [
          'add-module-exports',
          'syntax-dynamic-import',
          'transform-class-properties',
        ],
      },
    },
    {
      test: /\.html$/i,
      include,
      loader: 'raw-loader',
    },
    {
      test: /\.css$/i,
      include: [
        include,
        pathTo('./node_modules/normalize.css/'),
        pathTo('./node_modules/primeng/'),
        pathTo('./node_modules/font-awesome/'),
        pathTo('./node_modules/angular/'),
        pathTo('./node_modules/bootstrap/'),
        pathTo('./node_modules/bootswatch/'),
        pathTo('./node_modules/semantic-ui-css/'),
      ],
      use: cssLoader(env),
    },
    {
      test: /\.styl$/i,
      include,
      use: stylusLoader(env),
    },
    {
      test: assets,
      include: resources,
      loader: `file-loader?name=resources/[1]?${suffix}&regExp=src/resources/(.*)`,
    },
    {
      test: assets,
      include: exclude,
      loader: `file-loader?name=vendors/[1]?${suffix}&regExp=node_modules/(.*)`,
    },
    {
      test: assets,
      exclude: [
        exclude,
        resources,
      ],
      loader: 'file-loader?name=[path]/[name].[ext]',
    },
  ],
  noParse: [
    /.+zone\.js\/dist\/.+/,
    /.+angular2\/bundles\/.+/,
  ],
});
