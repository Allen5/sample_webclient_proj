//var path = require('path');
//var webpack = require('webpack');

const path = require('path');

import webpack from 'webpack';

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
        path: path.resolve(__dirname, "build"),
        filename: "[name].bundle.js"
    },

    /**
     * 模块化处理css, png, jpg等资源
     * 模块化处理 es6 的js
     */
    module: [

        /**
         * 文本文件处理
         */
        {
            test: /\.txt$/, use: 'raw-loader'
        },


    ]

}

/**
 * 导出webpack配置项
 */
module.exports = config
