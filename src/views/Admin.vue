<template>
	<div>
		<admin-header></admin-header>

		<slider></slider>

		<router-view></router-view>
</div>


</template>
<script>
	import slider from '@/components/admin/slider'
	import adminHeader from '@/components/admin/adminHeader'
  import '../../static/style/admin.css'

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
