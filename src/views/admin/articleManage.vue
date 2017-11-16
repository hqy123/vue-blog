<template>
	<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">

		<admin-bread>文章管理</admin-bread>

		<div class="row">
			<div class="col-md-12">
				<div class="panel panel-default">
					<div class="panel-heading">
						Article Manage
						<router-link class="btn btn-info fr" to="/articleEdit">
							添加文章
						</router-link>
					</div>
					<div class="panel-body">
						<table class="table table-hover">
							<thead>
								<tr>
									<th>#序号</th>
									<th>标题</th>
                  <th>节点</th>
									<th>发布时间</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item,index) in articleList">
									<td>{{index+1}}</td>
									<td>{{item.title}}</td>
                  <td>{{item.n.nodeName}}</td>
									<td>{{item.published_time | timeFormat}}</td>
									<td>
										<a href="javascript:void(0);" class="btn btn-danger btn-xs" @click="delArticleById(item.pk_article_id)">删除</a>
										<a href="" class="btn btn-info btn-xs">修改</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

		</div>

    <admin-footer></admin-footer>


	</div>

</template>
<script>
	import filter from '@/util/filter'
	import adminBread from '@/components/admin/bread'
  import adminFooter from '@/components/admin/adminFooter'
  import axios from 'axios'

	export default {
		name: 'article-manage',
		data () {
			return {
				articleList:[]
			}
		},
		mounted () {
			this.getArticleList();
		},
		methods:{
			getArticleList () {
				axios.get('api/blog/getArticleList').then(res=>{
					this.articleList = res.data;
					console.log(res.data);
				},err=>{
					console.log(err);
				})
			},
      delArticleById(aid){
			  axios.post('api/blog/delArticleById',{id:aid}).then(res=>{
			    this.getArticleList();
			    console.log(res);
        },err=>{
			    console.log(err);
        })
      }
		},
		components:{
			adminBread,
      adminFooter
		}
	}
</script>
