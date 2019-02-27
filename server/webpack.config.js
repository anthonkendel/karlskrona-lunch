const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin')

const isProduction = process.env === 'production';

module.exports = {
  target: 'node',
  entry: './src/server.ts',
  output: {
    path: path.resolve(__dirname, 'build', 'src'),
    filename: 'server.js'
  },
  mode: isProduction ? 'production' : 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.mjs', '.js'],
    modules: ['src', 'node_modules'],
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
  plugins: [
    new NodemonPlugin(),
  ],
}
