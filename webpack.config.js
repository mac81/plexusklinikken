var path = require("path"),
    webpack = require("webpack"),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: [
        //'react-hot-loader/patch',
        //'webpack-dev-server/client?http://localhost:3000',
        //'webpack/hot/only-dev-server',
        //'webpack-hot-middleware/client',
        './src/app'
    ],
    output: {
        path: path.resolve(__dirname, "public/"),
        publicPath : '/public/',
        filename: "app.js"
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("styles.css")
    ],
    postcss: function () {
        return [
            require('autoprefixer')
        ];
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract([
                    'css?sourceMap&modules&importLoaders=1&localIdentName=[path]___[name]__[local]',
                    'postcss',
                    'sass'
                ])
                // loaders: [
                //     'style?sourceMap',
                //     'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]',
                //     'resolve-url',
                //     'sass?sourceMap'
                // ]
            },
            {
                test: /\.json$/,
                loaders: ['json']
            }
        ]
    }
};
