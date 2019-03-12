const path = require('path');
const webpack = require('webpack');

const SRC = path.resolve(__dirname, 'src');
const DST = path.join(__dirname, 'dist');
const STATIC = path.resolve(__dirname, 'static');
const mode = 'development';

module.exports = {
  mode,
  entry: `${SRC}/client/app.js`,
  output: {
    path: `${DST}/client`,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
      query: { compact: false }
    }, {
      test: /\.(scss|css)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(mode)
      }
    }),
    // other plugins,
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery'
    // }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 10000 // Minimum number of characters
    }),
    new webpack.optimize.AggressiveMergingPlugin(), // Merge chunks
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: STATIC,
    historyApiFallback: true,
    port: 8081
  },
  node: {
    fs: 'empty'
  }
};
