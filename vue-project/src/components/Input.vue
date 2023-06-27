

<template>
        <div class="top">
			<input type="text" placeholder="请输入内容!" v-model="inputVal">
			<button type="button" @click="add">{{title}}</button>
		</div>
	
	
   
</template>
<script setup >
	import { ref } from 'vue'
	import { getCurrentInstance } from 'vue'
	 defineProps(["title"])
	const instance = getCurrentInstance();

	let inputVal = ref("");
 	const add = ()=>{
		if(inputVal != ''){
			instance?.proxy?.$Bus.emit('on-inputVal', inputVal.value)
		}
	} 
</script>
<style scoped lang="scss">

	.top{
		display: flex;
		justify-content:center;
		align-items: center;
		input{
			width: 300px;
			height: 30px;
			border: 2px solid #ccc;
			color: black;
			font-size: 14px;
			transition: all .3s ease;
			padding-left: 5px;
			border-radius: 5px;
			outline: none;
			
			&:hover{
				border-color: #409eff;
			}
			&:focus{
				border-color: #409eff !important;
			}
		}
		button{
			border: 2px solid #409eff;
			outline: none;
			color: #409eff;
			padding: 8px 15px;
			display: block;
			margin-left: 10px;
			cursor: pointer;
			transition: all .3s ease;
			border-radius: 5px;
			background: transparent;
			
			&:hover{
				background: #409eff;
				color: white;
			}
		}
	}

</style>
