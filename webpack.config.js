
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
        filename: IsDevelopment ? 'js/[name].js' : 'js/[name][hash:8].min.js',
        path: path.resolve(__dirname, "build"),
        chunkFilename: "js/[name].[hash:8].js",
        publicPath: '/',
    },  // 打包出口文件
    devServer: {
    },
    
};