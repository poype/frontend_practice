const path = require('path');  // nodejs核心模块，专门用来处理路径问题
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // entry要求用相对路径
    entry: './src/main.js',

    output: {
        // path要求用绝对路径，__dirname是nodejs中的一个变量，代表当前文件夹的路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js',  // 这个filename指定的是js输入的文件名，或者是入口文件打包输出的文件名
        clean: true  // 自动清空上次的打包结果
    }, 
    
    // loader
    module: {
        rules: [
            // 处理css资源的loader
            {
                test: /\.css$/i, // 匹配的文件，只有.css文件才会使用下面的loader进行处理
                use: [
                    // loader的执行顺序是从后到前执行，即css-loader先执行，style-loader后执行
                    MiniCssExtractPlugin.loader,  // 在html文件中创建style标签，以便让js中的css生效
                    "css-loader"  // 将css资源通过commonjs的方式打包到js中
                ],
            },
            // 处理less资源的loader
            {
                test: /\.less$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader", // less-loader会将less先编译成css
                ],
            },
            // 处理图片资源。图片资源的处理已经内置到webpack中，默认不需要额外配置。
            // 但如果需要对图片进行优化，还需要特定配置
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 50 * 1024  // 小于50KB的图片转换成base64
                    }
                },
                generator: {
                    // 配置输出图片的名称和路径
                    filename: "images/[hash:10][ext]"  // 图片的名称为其hash值的前10位
                }
            },
            // babel loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        ['@babel/preset-env', { targets: "ie 11" }] // 将ES6代码编译长支持ie 11的代码
                    ]
                }
            },
        ],
    },

    plugins: [
        // eslint在webpack5中是作为一个插件使用
        new ESLintPlugin({
            // 指定需要eslint检查的文件
            context: path.resolve(__dirname, "src")
        }),
        // 自动将打包好的js引入到html文件，html文件内容以public/index.html为模板
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "css/main.css"
        })
    ],

    mode: "production"
};