<script setup >
</script>

<template>
  <ul>
    <li>
      <router-link to="/project1View">项目一</router-link>
    </li>
    <li>
		  <router-link to="/project2View">项目二</router-link>
	  </li>
    <li>
		  <router-link to="/project3View">项目三</router-link>
	  </li>
    <li>
		  <router-link to="/project4View">项目四</router-link>
	  </li>
  </ul>
  <router-view></router-view>
</template>

<style  lang="scss">
	li{
		list-style: none;
	}
</style>
