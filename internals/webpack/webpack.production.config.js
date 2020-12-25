const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const paths = require('./paths');

const webpackMerge = require('webpack-merge');
const common = require('./webpack.base.config');

module.exports = webpackMerge(
  common,
  {
    mode: 'production',
    devtool: 'source-map',
    stats: {
      children: false,
      assets: false,
      warnings: false,
    },
    output: {
      path: paths.outputPath,
      filename: 'js/[name]-[contenthash:8].js',
      chunkFilename: 'js/[name]-[contenthash:8].js',
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new CleanWebpackPlugin(),
      new Dotenv({
        path: paths.envProdPath,
        expand: true,
      }),
      new Dotenv({
        path: paths.envPath,
        expand: true,
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name]-[contenthash:8].css',
        chunkFilename: 'css/[name]-[contenthash:8].css',
      }),
    ],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 30000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `vendor.${packageName.replace('@', '')}`;
            },
          },
        },
      },
      minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
  });

