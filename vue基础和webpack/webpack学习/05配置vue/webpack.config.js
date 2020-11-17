const path=require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack')
// npm install html-webpack-plugin --save-dev
const HtmlWebpackPlugin = require('html-webpack-plugin')
//npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports={
	entry:"./src/main.js",
	output:{
		path: path.resolve(__dirname,'dist'),
		filename:'bundle.js',
		// publicPath: 'dist/'
	},
	module: {
	    rules: [
	        { 
				test: /\.css$/, 
				// css-loader只负责将css文件进行加载
				// style-loader负责将样式添加到DOM中
				// 使用多个loader是从右到左一依次使用
				use: ['style-loader','css-loader'] ,
			},
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "less-loader" // compiles Less to CSS
				}]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
				  {
					loader: 'url-loader',
					options: {
						//当图片小于limit时，会将图片编译成base64字符串形式
						//当图片大于limit时，需要使用file-loader模块进行加载
					  limit: 8192,
					  //图片命名
					  name:'img/[name].[hash:8].[ext]'
					},
				  }
				]
			},
			{
				test: /\.vue$/,
				use: ['vue-loader']
			},
			
	     ]
	},
	resolve:{
		//alias:别名
		alias:{
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	plugins:[
	    new VueLoaderPlugin(),
		new webpack.BannerPlugin('版权所有声明'),
		new HtmlWebpackPlugin({
				template : 'index.html'
		}),
		// new UglifyjsWebpackPlugin()
	],
	devServer:{
		contentBase : './dist',//为哪一个文件夹提供本地服务，默认是根文件夹
		inline : true,//页面实时刷新
		//port:
		//historyApiFallback: 在SPA页面中，依赖HTML5的history模式
	}
}