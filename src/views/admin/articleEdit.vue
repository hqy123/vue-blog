<template>
	<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 article_edit">
		
		<admin-bread>文章编辑</admin-bread>
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header"></h1>
			</div>
		</div>
			
		<div class="row">
			<div class="col-md-12">
				<div class="panel panel-default">
					<div class="panel-heading">
						Article Edit
						<router-link class="btn btn-info fr" to="/articleManage">
							返回管理
						</router-link>
					</div>
					<div class="panel-body">
						
						<div class="form-group">
							<label class="control-label col-md-1">节点：</label>
							<div class="col-md-2">
								<select class="form-control" :value="nodeIndex">
									<option v-for="node in nodeList" :value="node.pk_node_id">{{node.nodeName}}</option>
									
								</select>
							</div>
							
						</div>

						<div class="form-group">
							<label class="control-label col-md-1">标题：</label>
							<div class="col-md-10">
								<input type="text" class="form-control" v-model="title">
							</div>
							
						</div>
						<div id="app">
							<vue-editor v-model="content"></vue-editor>
						</div>
						<div class="form-group col-md-offset-5 submit">
							<button class="btn btn-default col-md-2" @click="articleUpload">commit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
			

		<div class="col-sm-12">
			<p class="back-link">Author by JMercer</a></p>
		</div>


	</div>
	
</template>
<script>
	import adminBread from '@/components/admin/bread'
	import {VueEditor}  from 'vue2-editor'
	import axios from 'axios'
	import qs from 'qs'

	export default {
		name: 'admin-index',
		data () {
			return {
				nodeList:[],
				content:"",
				title:"请输入标题",
				nodeIndex:null,
			}	
		},
		mounted () {
			this.getNodeList();
		},
		methods:{
			getNodeList () {
				axios.get('http://127.0.0.1:8080/blog/getNodeList').then(res=>{
					this.nodeList = res.data;
					this.nodeIndex = res.data[0].pk_node_id
				},err=>{
					console.log(err);
				})
			},
			articleUpload () {
				let params = new URLSearchParams();
				params.append('node',this.nodeIndex);
				params.append('title',this.title);
				params.append('content',this.content);
				
				axios.post('http://127.0.0.1:8080/blog/uploadArticle',params).then(res=>{
					console.log(res);
				},err=>{
					consoe.log(err)
				})
			}
		},
		components:{
			adminBread,
			VueEditor
		}
	}
</script>


<style scoped>
	.article_edit .form-group{
		overflow: hidden;
	}
	.article_edit .control-label{
		line-height: 35px;
	}
	.article_edit  input.form-control{
		height: 35px;
	}
	.submit{
		padding: 10px;
	}
</style>