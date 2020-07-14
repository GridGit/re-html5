const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 15.x之后版本的vue-loader 还需要配置插件
// const { VueLoaderPlugin } = require('vue-loader');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VuxLoader = require('vux-loader');

let oConfig = {
    mode: 'development',
    // entry: {
    //     'index': path.join(__dirname, './src/index.js'),
    // },
    // output: {
    //     path: path.join(__dirname, 'dist'),
    //     filename: '[name].js'
    // },
    devServer: {
        open: true,
        port: 3033,
        contentBase: 'src',
        hot: true
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(png|jpg|jpeg|gif|bmp)$/,
                use: ['url-loader?limt=76&name=[hash:8]-[name].[ext]']
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, {
                test: /\.vue$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.vue', '.js', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        }
    },
    // performance: {
    //     hints: false
    // },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        })
    ]
}

// module.exports = VuxLoader.merge(oConfig, {
//     plugins: [{
//         name: 'vux-ui'
//     }, {
//         name: 'duplicate-style'
//     }]
// })
module.exports = oConfig