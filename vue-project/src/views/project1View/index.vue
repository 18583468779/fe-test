

<template>
    <div class="wrapper">
        <div class="top">
			<Input title="点击添加"/>
		</div>
		<div class="bottom">
			<List />
		</div>
    </div>
</template>
<script setup >
	import Input from '../../components/Input.vue'
	import List from '../../components/List.vue';
</script>
<style scoped lang="scss">
.wrapper {
    width: 100%;
    height: 800px;
    background:white;
	padding: 0 5%;
	box-sizing: border-box;
	.bottom{
		margin-top: 100px;
	}
}
</style>
