
const path = require('path');
const {MODE} = process.env;
//development是true,不是开发false
let IsDevelopment = MODE === 'development';

module.exports = {
    mode: MODE,
    devtool: IsDevelopment ? 'source-map' : 'cheap-module-source-map',
    entry: {
        index: './src/index.js',
    },  // 入口文件,多入口配置
    output: {
        filename:'bundle.js',
        path:__dirname,
    },  // 打包出口文件
    devServer: {
        port: 8080,
        ip:'192.168.1.3',
    },
    
};