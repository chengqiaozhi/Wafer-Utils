const path = require('path');

module.exports = {
    entry: './index.js', // 入口文件
    output: { // 输出配置
        filename: 'index.js', // 输出文件名
        path: path.resolve(__dirname, 'dist'), // 输出文件目录
        library: 'test', // 库的名称
        libraryTarget: 'umd', // 打包格式，UMD兼容CommonJS和AMD以及全局变量
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};