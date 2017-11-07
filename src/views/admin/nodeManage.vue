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
						<table class="table table-hover">
							<thead>
								<tr>
									<th>#序号</th>
									<th>节点名</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody v-for="(item,index) in nodeList">
								<tr>
									<td>{{index+1}}</td>
									<td>{{item.nodeName}}</td>
									<td>
										<a href="#" class="btn btn-danger btn-xs">删除</a>
										<a href="" class="btn btn-info btn-xs">修改</a>
									</td>
								</tr>
							</tbody>	
						</table>
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
						<input type="text" class="form-control" v-model="nodeName">
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
				nodeList: [],
			}	
		},
		mounted () {
			this.getNodeList();
		},
		methods:{
			addNode () {
				let params = new URLSearchParams();
				params.append("nodeName",this.nodeName);
				axios.post('http://127.0.0.1:8080/blog/addNode',params).then(res=>{
					this.nodeName="";
					this.getNodeList();
				},err=>{
					console.log(err);
				})
			},
			getNodeList () {
				axios.get('http://127.0.0.1:8080/blog/getNodeList').then(res=>{
					this.nodeList = res.data;
				},err=>{
					console.log(err);
				})
			}	
		},
		components:{
			adminBread,
		}
	}
</script>