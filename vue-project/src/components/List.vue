<template>
	<div class="wrapper">
		<ul>
			<li v-for="item in list" :key="item.id">
				{{item.content}}
			</li>
		</ul>
	</div>
</template>

<script  setup>
	import { ref,reactive } from 'vue'
	import { getCurrentInstance } from 'vue'
	let list = reactive([{id:1,content:"第一条数据"},{id:2,content:"第二条数据"}])
	const instance = getCurrentInstance()
	instance?.proxy?.$Bus.on('on-inputVal', (inputVal) => {
		list.push({
			id: Math.floor(Math.random()*10000) ,
			content:inputVal
		})
	})

	
</script>

<style lang="scss" scoped>
	.wrapper{
		width: 100%;
		background: #ccc;
		border: 1px solid #ccc;
		ul{
			width: 100%;
			margin-top: 40px;
			li{
				width: 100%;
				height: 50px;
				font-size: 16px;
				border-bottom: 1px solid #ccc;
				margin-bottom: 20px;
				cursor: pointer;
				transition: all .3s ease;
				line-height: 50px;
				padding-left: 10px;
				box-sizing: border-box;
				&:hover{
					background: #eee;
				}
			}
		}
	}
</style>