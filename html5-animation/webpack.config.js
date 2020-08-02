const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


function getCssLoader(type) {
    const oStyleLoader = {
        loader: 'style-loader'
    };
    const oCssLoader = {
        loader: 'css-loader'
    };

    const oSassLoader = {
        loader: 'sass-loader',
    };

    const oLessLoader = {
        loader: 'less-loader'
    }

    const oPostCssScss = {
        loader: 'postcss-loader',
        options: {
            parser: 'postcss-scss'
        }
    };

    const oPostCssLess = {
        loader: 'postcss-loader',
        options: {
            parser: 'postcss-less'
        }
    };

    // if (type === 'scss' || type === 'sass') return [MiniCssExtractPlugin.loader, oCssLoader, oSassLoader];
    // if (type === 'less') return [MiniCssExtractPlugin.loader, oCssLoader, oLessLoader];
    // return [MiniCssExtractPlugin.loader, oCssLoader]

    if (type === 'scss' || type === 'sass') return [oStyleLoader , oCssLoader, oSassLoader, oPostCssScss];
    if (type === 'less') return [oStyleLoader, oCssLoader, oLessLoader];
    return [oStyleLoader, oCssLoader, oPostCssScss]
}

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        open: true
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', 'scss', 'css'],
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: getCssLoader(),
        }, {
            test: /\.scss$/,
            use: getCssLoader('scss')
        }]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        })
    ]    
}