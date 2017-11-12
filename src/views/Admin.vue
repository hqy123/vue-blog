<template>
	<div>
		<admin-header></admin-header>

		<slider></slider>

		<div class="main">
      <router-view></router-view>
    </div>
  </div>


</template>
<script>
	import slider from '@/components/admin/slider'
	import adminHeader from '@/components/admin/adminHeader'

	export default {
		name:"admin",
		data(){
			return {}
		},
		components:{
			adminHeader,
			slider
		}
	}
</script>
<style scoped>
  @import "../assets/style/admin.css";
</style>
