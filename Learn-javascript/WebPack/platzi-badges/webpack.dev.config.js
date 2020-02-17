const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js'),

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: 'http://localhost:1003/',
        chunkFilename:'js/[id].[chunkash].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        port: 1003,
        hot: true,
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
                        {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'assets/',
                    }
                }
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
    ],
}