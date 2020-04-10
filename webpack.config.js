const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: './app.js'
  },
  devServer: {
    port: process.env.PORT || 8000,
    contentBase: './public'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      modules: __dirname + '/node_modules',
      jquery: 'modules/admin-lte/plugins/jquery/jquery.min.js',
      bootstrap: 'modules/admin-lte/plugins/bootstrap/js/bootstrap.js'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new ExtractTextPlugin('app.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
      loader: 'file'
    }]
  }
}