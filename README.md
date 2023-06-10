1. 初始化项目，下载webpack依赖
下载命令: npm install webpack webpack-cli --dev 

2. Webpack五大核心概念
Entry: 入口，指示Webpack从哪个文件开始打包
Output: 输出，指示Webpack打包完的文件输出到哪里去，如何命名等
Loaders: Webpack本身只能处理JS、JSON等资源，其它类型的资源需要借助loader才能解析
Plugins: 扩展webpack的功能
Mode: 主要有两种模式，开发模式(development)和生产模式(production)

webpack.config.js是webpack的配置文件

3. 跟eslint相关的有两个配置文件，.eslintrc.js和.eslintignore
eslint的配置文件有很多种写法，配置文件可以分别是.eslintrc,.eslintrc.js,.eslintrc.json 或者直接写在package.json中
此处我只用了.eslintrc.js一种方式
.eslintignore是用于忽略不需要检查的文件，其功能类似.gitignore

4. webpack-dev-server是一个开发server，修改代码后，无需每次手动打包，该server会自动把变更重新渲染到浏览器中
   npx webpack serve 命令用于启动这个server
   使用--config选项可以指定webpack的配置文件
   npx webpack serve --config ./webpack.dev.js

5. css代码被打包到js文件中，会引发闪屏现象。因为要等js加载完之后才能渲染出css。
   闪屏的用户体验很差，为了避免闪屏现象，需要将css代码提取到一个单独的css文件中。
   这就要用到MiniCssExtractPlugin这个插件