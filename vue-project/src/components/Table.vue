<template>
	<table>
	  <thead>
	    <tr>
	      <th>名称</th>
	      <th>价格</th>
	      <th>数量</th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr class="highlight" v-for="item in list" :key="item.name" :class=" item.isActive == false ? 'isNone' : 'isActive'">
	      <td>{{item.name}}</td>
	      <td>${{item.price}}</td>
	      <td>{{item.num}}</td>
		  
	    </tr>
	    
	  </tbody>
	</table>
</template>

<script setup >
	import {reactive} from "vue";
	import { getCurrentInstance } from 'vue'
	const instance = getCurrentInstance()

	let list = reactive([{
		name:"道具1",
		price:10,
		num:5
	},{
		name:"道具2",
		price:5,
		num:13
	},{
		name:"道具3",
		price:15,
		num:3
	},{
		name:"道具4",
		price:20,
		num:5
	},
	{
		name:"道具5",
		price:113,
		num:534
	}])


	instance?.proxy?.$Bus.on('on-inputVal', (inputVal) => {
	    // console.log(inputVal)
		let arr = list.map(item => {
			item.isActive = false;
			if(item.name.includes(inputVal)){
				item.isActive = true
			}
			
			return item
		});
		list = arr;
		console.log(list)
	})
</script>

<style scoped lang="scss">
	table {
	  width: 100%;
	  border-collapse: collapse;
	}
	
	th, td {
	  padding: 12px;
	  text-align: left;
	  border-bottom: 1px solid #ddd;
	  
	}
	td{
		color: white;
		cursor: pointer;
	}
	.highlight {
	  background-color: #409eff;
	  transition: transform 0.3s;
	}
	
	.highlight:hover {
	  transform: rotate(2deg);
	}
	.isActive{
		display:table-row;
	}
	.isNone{
		display:none;
	}
	</style>