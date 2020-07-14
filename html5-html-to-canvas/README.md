***
#### 基本流程
    * 添加webpack配置webpack.config.js
    * 安装webapck webpack-cli
        * webpack-cli 安装 3.3.12
    * 安装html-webpack-plugin clean-webpack-plugin
        * 自动生成html文件
        * 清除dist目录
    * 安装webpack-dev-server开发服务器
        * 启动开发服务器
    * 安装style-loader css-loader
        * 处理css文件
    * 安装url-loader file-loader
        * 处理css中的url() 
        * 处理图片文件 png | jpg | gpeg | svg
        * 处理字体文件 ttf | woff | woff2
        * url-loader和file-loader都可以打包图片，区别是url-loader会将图片以base64打包到js文件中，当图片过大时，打包的js文件也会过大。所以最佳实践是：将小图片打包为base64，大于某个值的文件打包为图片。如果在配置中不加limit，所有图片都会打包为base64
        *s 
    * 安装vue-loader vue-template-compiler
        * 解析vue文件
        * 15.x之后版本的vue-loader，还需要配置插件
    * 

##### 注意事项
    * 记录几个小坑
    *  1.配置好编译vue的环境后,App.vue文件中的代码可以在页面正常显示，然后在cpn中新建了一个Title.vue组件，App.vue引入，在template中使用<title></title>展示，发现页面并没有Title组件中的内容，webpack也未报错，开始以为是未正确配置vue文件中的引入语法，一顿排错查找，查看vue-loader,vue文档，未找到解决方法。最后突然想到，组件名大写试试，使用<Title></Title>,结果Title组件正确展示，具体原因如下：
        * HTML标签不区分大小写，生成的所有标签名都会转换为小写。
        * 通过标签名寻找自定义组件，顺序从高到低为：原标签名、驼峰的标签名、PascalCase化的标签名。 my-component、myComponent、MyComponent
        * 需要说明的是，此处正好有一个巧合，html原生有一个<title>标签，所以组件查找时，使用的是原生title.如果自定义的是<Tab>组件，可以使用<tab>形式。但官方推荐使用PascalCase，所以还是按照官方推荐吧，少走坑
