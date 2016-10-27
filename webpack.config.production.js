var path = require("path"),
    webpack = require("webpack"),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/app'
    ],
    output: {
        path: path.resolve(__dirname, "public/"),
        publicPath : '/public/',
        filename: "app.js"
    },
    plugins: [
        new webpack.DefinePlugin({
            __LOCAL__: false,
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new ExtractTextPlugin("css/app.css")
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
                    'css?sourceMap&modules&importLoaders=1&localIdentName=[hash:base64:5]',
                    'postcss',
                    'sass'
                ])
            },
        ]
    }
};
