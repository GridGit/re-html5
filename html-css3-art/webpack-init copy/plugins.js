const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpackbar = require('webpackbar');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = [
    new Webpackbar(),
    new CaseSensitivePathsPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].css',
        ignoreOrder: true
    })    
]