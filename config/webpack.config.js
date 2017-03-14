const precss = require('precss');
const autoprefixer = require('autoprefixer');

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const aotLoader = require('@ultimate/aot-loader');

const {
  ContextReplacementPlugin,
  NoEmitOnErrorsPlugin,
  LoaderOptionsPlugin,
  ProvidePlugin,
  DefinePlugin,
  optimize,
} = require('webpack');

const {
  AggressiveMergingPlugin,
  CommonsChunkPlugin,
  UglifyJsPlugin,
} = optimize;

const { join } = require('path');
const pathTo = rel => join(process.cwd(), rel);
const isProd = env => env === 'production' || env === 'ghpages';
const publicPath = env => env === 'ghpages' ? '/angular2/' : '/';

const { version } = require('../package.json');
const suffix = `?v=${version}`;
const staticDir = './dist';

const babelConfig = {
  presets: [
    [ 'es2015', { modules: false, }, ],
    'stage-0',
  ],
  plugins: [
    'transform-class-properties',
    'syntax-dynamic-import',
    'add-module-exports',
  ],
};

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
const exclude = /\/(node_modules|bower_components)\//i;
const assets = /\.(raw|gif|png|jpe?g|otf|eot|woff2?|ttf|svg|ico)$/i;

const use = env => [
  {
    loader: 'css-loader',
    options: {
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
});

const stylusLoader = env => ExtractTextWebpackPlugin.extract({
  publicPath: publicPath(env),
  fallback: 'style-loader',
  use: [
    ...use(env),
    'stylus-loader',
  ],
});

module.exports = env => ({

  context: pathTo('.'),

  entry: {
    polyfills: './src/polyfills.ts',
    vendors: './src/vendors.ts',
    app: './src/main.ts',
  },

  output: {
    jsonpFunction: 'w',
    path: staticDir,
    publicPath: publicPath(env),
    filename: '[name].js' + suffix,
    sourceMapFilename: '[file].map' + suffix,
    chunkFilename: '[id].chunk.js' + suffix,
  },

  module: {
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

      {
        test: /\.ts$/i,
        include,
        loaders: isProd(env) ? [
            '@ultimate/aot-loader',
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

      {
        test: /\.html$/i,
        include,
        loader: 'raw-loader',
      },

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

      {
        test: assets,
        include: resources,
        use: {
          loader: 'file-loader',
          options: {
            name: 'resources/[1]' + suffix,
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
            name: 'vendors/[1]' + suffix,
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
            name: '[path]/[name].[ext]' + suffix,
          },
        },
      },

    ].filter(rule => !!rule),

    noParse: [
      /.+zone\.js\/dist\/.+/,
      /.+angular2\/bundles\/.+/,
    ],
  },

  resolve: {
    modules: [
      './src',
      'node_modules',
    ],
    extensions: [
      '.ts',
      '.js',
      '.css',
      '.styl',
    ],
  },

  plugins: [

    new ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      './src'
    ),

    new NoEmitOnErrorsPlugin(),

    new ProgressBarWebpackPlugin(),

    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
    }),

    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isProd(env) ? 'production' : 'development'),
        DEVELOPMENT: !isProd(env),
      },
    }),

    new CommonsChunkPlugin({
      // order does matters!
      names: [
        'app',
        'vendors',
        'polyfills',
        'manifest',
      ],
    }),

    new ExtractTextWebpackPlugin({
      filename: '[name].css' + suffix,
      disable: false,
      allChunks: true,
      publicPath: publicPath(env),
    }),

    new BaseHrefWebpackPlugin({ baseHref: publicPath(env), }),

    new HtmlWebpackPlugin({
      chunks: 'all',
      // chunks: [
      //   'manifest',
      //   'polyfills',
      //   'vendors',
      //   'app',
      // ],
      filename: 'index.html',
      favicon: './src/assets/favicon.ico',
      template: './src/assets/index.html',
      minify: isProd(env) ? {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      } : false,
    }),

    new LoaderOptionsPlugin({
      options: {
        // context: pathTo('.'),
        babel: babelConfig,
        postcss: [
          precss,
          require('rucksack-css')({
            fallbacks: true,
            autoprefixer: {
              browsers: [
                'last 4 versions',
              ],
            },
          }),
        ],
        tslint: {
          emitErrors: true,
          failOnHint: isProd(env),
          configFile: './config/tslint.json',
          formattersDirectory: 'node_modules/tslint-loader/formatters/',
          fileOutput: {
            dir: './dist/tslint/',
            ext: 'xml',
            clean: true,
            header: '<?xml version="1.0" encoding="utf-8"?><checkstyle version="5.7">\n',
            footer: '</checkstyle>',
          },
        },
      },
      minimize: isProd(env),
      debug: !isProd(env),
    }),

    isProd(env) ? new AggressiveMergingPlugin() : undefined,

    isProd(env) ? new aotLoader.AotPlugin({
      tsConfig: './src/tsconfig.json',
      entryModule: `./app/app.module#AppModule`
    }) : undefined,

    isProd(env) ? new UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        warnings: false,
        screw_ie8: true,
      },
      comments: false,
    }) : undefined,

    isProd(env) ? new CompressionWebpackPlugin({
      asset: "[path].gz?[query]",
      algorithm: "gzip", // zlib, zopfli, function(buf, callback)
    }) : undefined,

    isProd(env) ? new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }) : undefined,

  ].filter(plugin => !!plugin),

  devtool: isProd(env) ? 'cheap-module-source-map' : 'inline',

  devServer: {
    port: 8000,
    stats: 'minimal',
    contentBase: './src',
    inline: !isProd(env),
    compress: isProd(env),
    historyApiFallback: {
      index: publicPath(env),
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        secure: false,
      },
    },
  },

  watchOptions: {
    ignored: [
      exclude,
      '**/*.js',
    ],
    poll: 1000,
    aggregateTimeout: 300,
  },

  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    global: true,
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false,
  },

  profile: 'web',
  bail: true,
});
