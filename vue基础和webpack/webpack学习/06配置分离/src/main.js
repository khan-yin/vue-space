const {add,mul} = require('./js/mathUtils.js')

console.log(add(20,30))
console.log(mul(20,30))

import  {name,age,height} from "./js/info.js"

console.log(name)
console.log(age)
console.log(height)

//css依赖
require('./css/normal.css')

//less依赖
require('./css/special.less')

document.writeln('<h2>你好</h2>')

//使用vue
import Vue from 'vue'

//命令：npm install vue-loader vue-template-compiler --save-dev
import App from './vue/App.vue'

console.log(App)

new Vue({
	el:"#App",
	template:'<App/>',
	components:{
		App,
	}
})


//方案3
/*import app3 from './vue/app.js'
console.log(app3)
new Vue({
	el:"#app3",
	template:'<app3/>',
	components:{
		app3
	}
})*/





//使用方法1
/*new Vue({
	el: '#app',
	template:`<div>
	<h2>{{message}}</h2>
	<button @click="btnClick">按钮</button>
	<h2>{{name}}</h2>
	</div>`,
	data:{
		message: 'Hello Webpack',
		name: 'coderwhy'
	},
	methods:{
		btnClick(){
			
		}
	}
})*/

//组件方式引入
/*const app2={
	template:`<div>
	<h2>{{message}}</h2>
	<button @click="btnClick">按钮</button>
	<h2>{{name}}</h2>
	</div>`,
	data(){
		return{
			message: 'Hello Webpack',
			name: 'coderwhy'
		}
	},
	methods:{
		btnClick(){
			
		}
	}
}

new Vue({
	el: '#app2',
	template: '<app2/>',
	components:{
		app2
	}
})*/

