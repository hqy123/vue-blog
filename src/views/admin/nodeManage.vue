<template>
	<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
		
		<admin-bread>节点管理</admin-bread>
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header"></h1>
			</div>
		</div>
			
		<div class="row">
			<div class="col-md-12">
				<div class="panel panel-default">
					<div class="panel-heading">
						Node Manage
						<button class="btn btn-info fr" data-toggle="modal" data-target=".bs-example-modal-sm">
							添加节点
						</button>
					</div>
					<div class="panel-body">
						<div class="canvas-wrapper">
							<canvas class="main-chart" id="line-chart" height="200" width="600"></canvas>
						</div>
					</div>
				</div>
			</div>
		</div>
			

		<div class="col-sm-12">
			<p class="back-link">Author by JMercer</a></p>
		</div>

		<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
			<div class="modal-dialog modal-sm" role="document">
				<div class="modal-content">
					<div class="input-group">
						<input type="text" class="form-control" :value="nodeName">
						<div class="input-group-btn">
							<button type="button" class="btn btn-primary fr" @click="addNode">add</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</template>
<script>
	import adminBread from '@/components/admin/bread'
	import axios from 'axios'

	export default {
		name: 'admin-index',
		data () {
			return {
				nodeName: "输入节点名",
			}	
		},
		methods:{
			addNode () {
				axios.get('http://127.0.0.1:8080/blog/addNode',{params:{nodeName:this.nodeName}}).then(res=>{
					console.log(res);
				},err=>{
					console.log(err);
				});
			},
			getNodeList () {

			}
		},
		components:{
			adminBread,
		}
	}
</script>