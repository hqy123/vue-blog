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
										<button  class="btn btn-danger btn-xs" @click="delNodeById(item.pk_node_id)">删除</button>
										<a href="" class="btn btn-info btn-xs">修改</a>
									</td>
								</tr>
							</tbody>
						</table>
            <admin-pages :page="pageData"></admin-pages>
					</div>
				</div>
			</div>
      <admin-footer></admin-footer>
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
  import adminPages from '@/components/admin/adminPages'
  import adminFooter from '@/components/admin/adminFooter'

	import axios from 'axios'

	export default {
		name: 'admin-index',
		data () {
			return {
				nodeName: "输入节点名",
				nodeList: [],
        pageData:{},
			}
		},
		mounted () {
			this.getNodeList();
		},
		methods:{
			addNode () {
				let params = new URLSearchParams();
				params.append("nodeName",this.nodeName);
				axios.post('api/blog/addNode',params).then(res=>{
					this.nodeName="";
					this.getNodeList();
				},err=>{
					console.log(err);
				})
			},
			getNodeList (page) {
			  page = page || 1;
				axios.get('api/blog/getNodeList',{
				  params: {
				    page: page,
        }
        }).then(res=>{
					this.nodeList = res.data.list;
          this.pageData.pageIndex = page;
					this.pageData.pageTotal = res.data.pages;
					this.pageData.nextPage = res.data.nextPage;
					this.pageData.prePage = res.data.prePage;
					console.log(this.pageData);

				},err=>{
					console.log(err);
				})
			},
      delNodeById (id){
			  axios.post("api/blog/delNodeById",{
			    id:id
        }).then(res=>{
			    console.log(res);
        },err=>{
			    console.log(err);
        })
      }
		},
		components:{
			adminBread,
      adminPages,
      adminFooter,
		}
	}
</script>
