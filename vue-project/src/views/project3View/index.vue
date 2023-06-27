

<template>
    <div class="wrapper">
		<carousel
			:autoplay="true"
			:duration="2000"
			:initial="0"
			:hasDot="true"
			:hasDirector="true"
			dotBgColor="#000"
		>
			<car-item v-for="(item,index) of listData" :key="index">
				<div class="picture">{{item.name}}</div>
			</car-item>
		</carousel>
    </div>	
</template>
<script setup >
	import { ref, reactive, onMounted } from 'vue';
	let listData =[
		{name:'第一张图'},
		{name:'第二张图'},
		{name:'第三张图'},
		{name:'第四张图'},
		{name:'第五张图'}
	]

</script>
<style scoped lang="scss">
.wrapper {
	width:500px;
    height: 300px;
    background:white;
	margin:10px auto;
	box-sizing: border-box;
	.bottom{
		margin-top: 100px;
	}

}
.picture{

	width:500px;
	height:300px;
	background:#ccc;
	display:flex;
	align-items: center;
    justify-content: center;
	color:white;
}
</style>
