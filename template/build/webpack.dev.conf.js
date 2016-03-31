var webpack = require('webpack');
var config = require('./webpack.base.conf');

// eval-source-map is faster for development
config.devtool = 'eval-source-map';

// add hot-reload related code to entry chunks
var polyfill = 'eventsource-polyfill';
var devClient = './build/dev-client';
Object.keys(config.entry).forEach(function (name, i) {
  var extras = i === 0 ? [polyfill, devClient] : [devClient];
  config.entry[name] = extras.concat(config.entry[name]);
});

// necessary for the html plugin to work properly
// when serving the html from in-memory
config.output.publicPath = '/';

// add sass loader in dev
config.module.loaders.push({
  test: /\.css$/,
  loader: 'style!css'
}, {
  test: /\.scss$/,
  loader: 'style!css!sass'
});

config.plugins = (config.plugins || []).concat([
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __DEV__: true
  })
]);

module.exports = config;
