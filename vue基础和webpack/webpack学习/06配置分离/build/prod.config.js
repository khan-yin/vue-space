//npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config.js')

module.exports=webpackMerge.merge(baseConfig,{
	plugins:[
		new UglifyjsWebpackPlugin()
	]
})