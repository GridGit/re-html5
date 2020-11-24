
module.exports = {
    parser: 'postcss-scss',
    plugins: {
        'postcss-pxtorem': {
            rootValue: 100,
            propList: ["*"]
        },
        'postcss-import': {},
        'postcss-preset-env': {},
        'cssnano': {}

    }
}