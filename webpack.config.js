const path = require('path');

const isProduction = process.env === 'production';

module.exports = {
  target: "node",
  entry: './src/server.ts',
  output: {
    path: path.resolve(__dirname, 'build', 'src'),
    filename: 'server.js'
  },
  mode: isProduction ? 'production' : 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@server': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [{
      use: 'ts-loader',
      test: /\.ts?$/,
    }],
  },
}