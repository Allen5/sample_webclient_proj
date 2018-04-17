//var path = require('path');
//var webpack = require('webpack');

const path = require('path');
const webpack = require('webpack');

/**
 * 配置项
 */
const config = {

    mode: 'development',

    watch: true,

    // 入口文件
    entry: {
        index: './source/index/index.js',
        docs: './source/docs/index.js'
    },

    // 输出文件
    output: {
        path: path.resolve(__dirname, "public/assets"),
        filename: "[name].bundle.js"
    },

    /**
     * 模块化处理css, png, jpg等资源
     * 模块化处理 es6 的js
     */
    module: {

        rules: [

            /**
             * css样式处理
             */
            { 
                test: /\.css$/, 
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },

            /**
             * less样式处理
             */
            { 
                test: /\.less$/, 
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },


            /**
             * js, jsx 文件中将es6的语法通过babel转换为es2015
             * 去除node_modules等依赖库目录
             */
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'], // presets: ['react', 'es2015']
                        },
                    }
                ]
            },
            
            /**
             * 处理字体
             */
            { 
                test: /\.(woff|woff2|eot|ttf|otf)$/i, 
                use: [
                    { 
                        loader: 'url-loader',
                        options: {
                            limit: '8192',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            
            /**
             * 处理图片
             */
            { 
                test: /\.(jpe?g|png|gif|svg)$/i, 
                use: [
                    { 
                        loader: 'url-loader',
                        options: {
                            limit: '8192',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },

        ]

    },

    /**
     * 开发服务
     */
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        compress: true,
        inline: true,
        port: 4101
    }

}

/**
 * 导出webpack配置项
 */
module.exports = config
