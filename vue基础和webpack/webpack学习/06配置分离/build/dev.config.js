const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config.js')

module.exports=webpackMerge.merge(baseConfig,{
	devServer:{
		contentBase : './dist',//为哪一个文件夹提供本地服务，默认是根文件夹
		inline : true,//页面实时刷新
		//port:
		//historyApiFallback: 在SPA页面中，依赖HTML5的history模式
	}
})