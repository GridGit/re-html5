
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getCssLoader(type) {
    const oCssLoader = {
        loader: 'css-loader'
    };

    const oSassLoader = {
        loader: 'sass-loader',
    };

    const oLessLoader = {
        loader: 'less-loader'
    }

    const oStylusLoader = {
        loader: 'stylus-loader'
    }

    const oPostCssScss = {
        loader: 'postcss-loader',
        options: {
            parser: 'postcss-scss'
        }
    };


    if (type === 'scss' || type === 'sass') return [MiniCssExtractPlugin.loader, oCssLoader, oSassLoader, oPostCssScss];
    if (type === 'stylus') return [MiniCssExtractPlugin.loader, oCssLoader, oPostCssScss, oStylusLoader];
    if (type === 'less') return [MiniCssExtractPlugin.loader, oCssLoader, oPostCssScss, oLessLoader];
    return [MiniCssExtractPlugin.loader, oCssLoader, oPostCssScss]
}

function getVueLoaders() {
    return {
        js: 'babel-loader',
        css: getCssLoader(),
        less: getCssLoader('less'),
        sass: getCssLoader('scss'),
        scss: getCssLoader('scss'),
        stylus: getCssLoader('stylus'),
        styl: getCssLoader('stylus')
    }
}


module.exports = {
    rules: [{
        test: /\.(js|vue)$/,
        enforce: 'pre',
        exclude: [/node_modules/],
        loader: 'eslint-loader'
    }, {
        test: /\.js$/,
        exclude: ['/node_modules/'],
        use: ['babel-loader'],
    }, {
        test: /\.vue$/,
        exclude: ['/node_modules/'],
        loader: 'vue-loader',
        options: {
            loaders: getVueLoaders()
        }
    }, {
        test: /\.css$/,
        exclude: ['/node_modules/'],
        use: getCssLoader(),
    }, {
        test: /\.less$/,
        exclude: ['/node_modules/'],
        use: getCssLoader('less')
    }, {
        test: /\.scss$/,
        exclude: ['/node_modules/'],
        use: getCssLoader('scss')
    }, {
        test: /\.(png|gif|svg|jpg|jpeg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]'
        }
    }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader'
    }]
}