const path=require('path')



module.exports={
	entry:"./src/main.js",
	output:{
		path: path.resolve(__dirname,'dist'),
		filename:'bundle.js',
		publicPath: 'dist/'
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
			      test: /\.js$/,
				  //exclude: 排除
				  //include: 包含
				  //命令： npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
			      exclude: /(node_modules|bower_components)/,
			      use: {
			        loader: 'babel-loader',
			        options: {
			          presets: ['es2015']
			        }
			      }
			    }
	     ]
	  }
}