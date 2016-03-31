var webpack = require('webpack');
var config = require('./webpack.base.conf');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// build vue to a single file
config.entry.vendors = ['vue'];

// naming output files with hashes for better caching.
// dist/index.html will be auto-generated with correct URLs.
config.output.filename = '[name].min.js';
config.output.chunkFilename = '[id].min.js';

// whether to generate source map for production files.
// disabling this can speed up the build.
var SOURCE_MAP = true;

config.devtool = SOURCE_MAP ? 'source-map' : false;

// extract sass files to build a single file in prod
config.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract(['css'])
}, {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract(['css', 'sass'])
});

config.plugins = (config.plugins || []).concat([
  // http://vuejs.github.io/vue-loader/workflow/production.html
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  // extract vendors into its own file
  new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.min.js'),
  // extract css into its own file
  new ExtractTextPlugin('[name].min.css')
]);

module.exports = config;
