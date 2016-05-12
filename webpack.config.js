var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: {
        public: './public/src/index'
    },
    output: {
        path: path.join(__dirname, 'public/dist'),
        filename: 'bundle.js',
        publicPath: 'public/dist'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [{
          test: /\.js|.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              presets: ['es2015', 'react']
          }
      }]
    }
};
