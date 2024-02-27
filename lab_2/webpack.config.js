// webpack.config.js
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development', // устанавливаем режим development
    entry: {
        main: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "./dist"), // шлях до папки зі збіркою
        },
        compress: true, // включає стиснення
        port: 9000, // порт для dev server
        open: true, // відкривати браузер автоматично
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/pages/index.html'), // шаблон
            filename: 'index.html', // ім'я вихідного файлу
        }),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/pages/about.html'), // шаблон
            filename: 'about.html', // ім'я вихідного файлу
        }),
    ],
};
