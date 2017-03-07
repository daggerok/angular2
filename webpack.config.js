const path = require('path');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssUrl = require('postcss-url');
const webpack = require('webpack');
const {
  NoEmitOnErrorsPlugin,
  LoaderOptionsPlugin,
  DefinePlugin,
} = webpack;
const { GlobCopyWebpackPlugin, BaseHrefWebpackPlugin } = require('@angular/cli/plugins/webpack');
const { CommonsChunkPlugin } = webpack.optimize;
const { AotPlugin } = require('@ngtools/webpack');
const { version } = require('./package.json');

const nodeModules = path.join(process.cwd(), 'node_modules');
const entryPoints = [ 'inline', 'polyfills', 'sw-register', 'styles', 'vendor', 'main' ];
const baseHref = undefined;
const deployUrl = undefined;

const publicPath = env => env === 'ghpages' ? '/angular2/' : '/';

const loaders = [
  'exports-loader?module.exports.toString()',
  'css-loader?{"sourceMap":false,"importLoaders":1}',
  'postcss-loader',
];
const use = [
  'css-loader?{"sourceMap":false,"importLoaders":1}',
  'postcss-loader',
];

module.exports = env => ({
  devtool: 'source-map',

  resolve: {
    extensions: [
      '.ts',
      '.js',
    ],
    modules: [
      './node_modules',
    ],
  },
  resolveLoader: {
    modules: [
      './node_modules',
    ],
  },

  entry: {
    main: [
      './src/main.ts',
    ],
    polyfills: [
      './src/polyfills.ts',
    ],
    styles: [
      './src/styles.styl',
    ],
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: `[name].bundle.js?v=${version}`,
    chunkFilename: `[id].chunk.js?v=${version}`,
    jsonpFunction: 'w',
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          /\/node_modules\//,
        ]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(eot|svg)$/,
        loader: `file-loader?name=[name].[hash:20].[ext]?v=${version}`,
      },
      {
        test: /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
        loader: `url-loader?name=[name].[hash:20].[ext]?v=${version}&limit=10000`,
      },
      {
        exclude: [
          path.join(process.cwd(), 'src/styles.styl'),
        ],
        test: /\.css$/,
        loaders: [
          ...loaders,
        ],
      },
      {
        exclude: [
          path.join(process.cwd(), 'src/styles.styl'),
        ],
        test: /\.scss$|\.sass$/,
        loaders: [
          ...loaders,
          'sass-loader',
        ],
      },
      {
        exclude: [
          path.join(process.cwd(), 'src/styles.styl'),
        ],
        test: /\.less$/,
        loaders: [
          ...loaders,
          'less-loader',
        ],
      },
      {
        exclude: [
          path.join(process.cwd(), 'src/styles.styl'),
        ],
        test: /\.styl$/,
        loaders: [
          ...loaders,
          'stylus-loader?{"sourceMap":false,"paths":[]}',
        ],
      },
      {
        include: [
          path.join(process.cwd(), 'src/styles.styl'),
        ],
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
          use,
          fallback: 'style-loader',
          publicPath: publicPath(env),
        }),
      },
      {
        include: [
          path.join(process.cwd(), 'src/styles.styl'),
        ],
        test: /\.scss$|\.sass$/,
        loaders: ExtractTextPlugin.extract({
          use: [
            ...use,
            'sass-loader',
          ],
          fallback: 'style-loader',
          publicPath: publicPath(env),
        }),
      },
      {
        include: [
          path.join(process.cwd(), 'src/styles.styl'),
        ],
        test: /\.less$/,
        loaders: ExtractTextPlugin.extract({
          use: [
            ...use,
            'less-loader',
          ],
          fallback: 'style-loader',
          publicPath: publicPath(env),
        }),
      },
      {
        include: [
          path.join(process.cwd(), 'src/styles.styl'),
        ],
        test: /\.styl$/,
        loaders: ExtractTextPlugin.extract({
          use: [
            ...use,
            'stylus-loader?{"sourceMap":false,"paths":[]}',
          ],
          fallback: 'style-loader',
          publicPath: publicPath(env),
        }),
      },
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack',
      },
    ],
  },

  plugins: [

    new NoEmitOnErrorsPlugin(),

    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env === 'development' ? env : 'production'),
      },
    }),

    new GlobCopyWebpackPlugin({
      patterns: [
        'assets',
        // 'favicon.ico',
      ],
      globOptions: {
        cwd: path.join(process.cwd(), './src'),
        dot: true,
        ignore: '**/.gitkeep',
      },
    }),

    new ProgressPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      hash: false,
      inject: true,
      compile: true,
      favicon: './src/favicon.ico',
      minify: env !== 'development' ? {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      } : false,
      cache: true,
      showErrors: true,
      chunks: 'all',
      excludeChunks: [],
      title: 'Webpack App',
      xhtml: true,
      chunksSortMode: function sort(left, right) {
        let leftIndex = entryPoints.indexOf(left.names[ 0 ]);
        let rightindex = entryPoints.indexOf(right.names[ 0 ]);
        if (leftIndex > rightindex) return 1;
        else if (leftIndex < rightindex) return -1;
        else return 0;
      },
    }),

    new BaseHrefWebpackPlugin({
      baseHref: publicPath(env),
    }),

    new CommonsChunkPlugin({
      name: 'inline',
      minChunks: null,
    }),

    new CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => module.resource && module.resource.startsWith(nodeModules),
      chunks: [
        'main',
      ],
    }),

    new ExtractTextPlugin({
      filename: `[name].bundle.css?v=${version}`,
      disable: true,
    }),

    new LoaderOptionsPlugin({
      sourceMap: false,
      options: {
        postcss: [
          autoprefixer(),
          postcssUrl({
            'url': (URL) => {
              // Only convert absolute URLs, which CSS-Loader won't process into require().
              if (!URL.startsWith('/')) {
                return URL;
              }
              // Join together base-href, deploy-url and the original URL.
              // Also dedupe multiple slashes into single ones.
              return `/${baseHref || ''}/${deployUrl || ''}/${URL}`.replace(/\/\/+/g, '/');
            }
          }),
        ],
        sassLoader: {
          sourceMap: false,
          includePaths: [],
        },
        lessLoader: {
          sourceMap: false,
        },
        context: '',
      },
    }),

    new AotPlugin({
      mainPath: 'main.ts',
      hostReplacementPaths: {
        'environments/environment.ts': env === 'development'
          ? 'environments/environment.ts'
          : 'environments/environment.prod.ts',
      },
      exclude: [],
      tsConfigPath: 'src/tsconfig.app.json',
    }),
  ],

  node: {
    fs: 'empty',
    global: true,
    crypto: 'empty',
    tls: 'empty',
    net: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false,
  },

  bail: true,
  profile: 'web',
  devServer: {
    port: 8000,
  },
});
