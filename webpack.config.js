const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const devServer = (isDev) => (!isDev
  ? {}
  : {
    devServer: {
      open: true,
      hot: true,
      port: 8080,
      static: path.join(__dirname, 'static'),
    },
  });

module.exports = ({ develop }) => ({
  mode: develop ? 'development' : 'production',
  devtool: develop ? 'inline-source-map' : false,
  entry: {
    app: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  module: {
    rules: [
      { test: /\.[tj]s$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.(ico|gif|png|jpg|jpeg|svg)$/i, type: 'asset/resource' },
      { test: /\.(woff(2)|eot|ttf|otf)$/i, type: 'assets/resource' },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'ts'],
      emitWarning: false,
      failOnWarning: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './public/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    // new CopyPlugin({
    //     patterns:[{
    //         from:'./public'
    //     }]
    // }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  ...devServer(develop),
});
