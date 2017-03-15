const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isDev = env !== 'production';
const PORT_DEV = 3000;

const htmlConfig = {
  minify: {
    collapseWhitespace: true,
    removeComments: true
  },
  template: path.resolve('./src/www/index.html')
};

const stats = {
  colors: true,
  hash: false,
  version: false,
  timings: false,
  assets: false,
  chunks: false,
  modules: false,
  reasons: false,
  children: false,
  source: false,
  errors: true,
  errorDetails: true,
  warnings: true,
  publicPath: false,
  hideModules: true
};

const webpackConfig = {
  context: path.resolve('./'),
  stats,
  entry: isDev ? [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${PORT_DEV}`,
    'webpack/hot/only-dev-server',
    path.resolve('./src/www/index.js')
  ] : {
    main: path.resolve('./src/www/index.js'),
    vendor: [
      'react',
      'react-router',
      'react-router-dom',
      'redux',
      'redux-thunk',
      'react-redux',
      'sk-fetch-wrapper'
    ]
  },
  output: {
    filename: isDev ? 'js/[name].js' : 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
    hashDigestLength: 8,
    path: path.resolve('./build'),
    publicPath: '/'
  },
  resolve: isDev ? {
  } : {
    alias: {
      react: 'preact-compat/dist/preact-compat.js',
      'react-dom': 'preact-compat/dist/preact-compat.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: isDev ? [
              'react-hot-loader/babel'
            ] : []
          }
        }
      },
      isDev ? {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]--[hash:base64:8]',
          'postcss-loader'
        ],
        exclude: /node_modules/
      } : {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=1&localIdentName=[hash:base64:8]',
            'postcss-loader'
          ],
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader?name=images/[name].[hash:8].[ext]',
        exclude: /node_modules/
      },
      {
        test: /\.(eot|woff2?|ttf)$/,
        use: 'file-loader?name=fonts/[name].[hash:8].[ext]',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new HtmlWebpackPlugin(htmlConfig),
    // Generate a 200.html that is the same as index.html for surge.sh
    // new HtmlWebpackPlugin(Object.assign({}, htmlConfig, {
    //   filename: '200.html'
    // })),
    ...isDev ? [
      // Dev plugins
      new webpack.HotModuleReplacementPlugin()
    ] : [
      // Prod build plugins
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
      }),
      new ExtractTextPlugin({
        filename: 'css/[name].[contenthash:8].css',
        allChunks: true,
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false
        },
        output: {
          comments: false
        },
        sourceMap: false
      })
    ]
  ],
  devServer: {
    host: 'localhost',
    port: PORT_DEV,
    historyApiFallback: true,
    hot: true,
    inline: true,
    quiet: true,
    contentBase: './build/',
    stats
  }
};

module.exports = webpackConfig;
