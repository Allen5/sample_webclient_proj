//var path = require('path');
//var webpack = require('webpack');

const path = require('path');

/**
 * 配置项
 */
const config = {

    /**
     * 入口文件
     */
    entry: {
        index: './source/index/index.js',
        docs: './source/doc/index.js'
    },

    /**
     * 输出文件
     */
    output: {
        path: path.resolve(__dirname, "public/assets"),
        filename: "[name].bundle.js"
    },

    /**
     * 模块化处理css, png, jpg等资源
     * 模块化处理 es6 的js
     */
    module: [

        /**
         * css样式处理
         */
        { 
            test: /\.css$/, 
            loader: "style-loader!css-loader"
        },

        /**
         * less样式处理
         */
        { 
            test: /\.less$/, 
            loader: "style-loader!css-loader!less-loader" 
        },


        /**
         * js, jsx 文件中将es6的语法通过babel转换为es2015
         * 去除node_modules等依赖库目录
         */
        {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: ['babel-loader'],
            query: {
                presets: ['es2015']
                // 如果安装了React的话
                // presets: ['react', 'es2015']
            }
        },
        
        /**
         * 处理字体
         */
        { 
            test: /\.(woff|woff2|eot|ttf|otf)$/i, 
            loader: 'url-loader?limit=8192&name=[name].[ext]'
        },
        
        /**
         * 处理图片
         */
        { 
            test: /\.(jpe?g|png|gif|svg)$/i, 
            loader: 'url-loader?limit=8192&name=[name].[ext]'
        },
    ]

}

/**
 * 导出webpack配置项
 */
module.exports = config
