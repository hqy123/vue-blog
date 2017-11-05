<template>
	<div class="row">
		<ol class="breadcrumb">
			<li><a href="#">
				<em class="fa fa-home"></em>
			</a></li>
			<li class="active">
				<slot></slot>
			</li>
		</ol>
	</div>

</template>
<script >
	
	export default {
		name:"admin-bread",
		data () {
			return {}
		}
	}
</script>