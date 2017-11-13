<template>
	<div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar">
		<div class="profile-sidebar">
			<div class="profile-userpic">
				<img src="http://placehold.it/50/30a5ff/fff" class="img-responsive" alt="">
			</div>
			<div class="profile-usertitle">
				<div class="profile-usertitle-name">{{username}}</div>
				<div class="profile-usertitle-status"><span class="indicator label-success"></span>Online</div>
			</div>
			<div class="clear"></div>
		</div>
		<div class="divider"></div>
		<ul class="nav menu">
			<li class="parent ">
				<a data-toggle="collapse" href="#node">
					<em class="fa fa-pencil-square-o">&nbsp;</em> Nodes <span data-toggle="collapse" href="#sub-item-1" class="icon pull-right"><em class="fa fa-plus"></em></span>
				</a>
				<ul class="children collapse" id="node">
					<li>
						<router-link to="/nodeManage">
							<span class="fa fa-arrow-right">&nbsp;</span> 节点管理
						</router-link>

					</li>
					<li>
						<a class="" href="#">
							<span class="fa fa-arrow-right">&nbsp;</span> 回收站
						</a>
					</li>
					<li>
						<a class="" href="#">
							<span class="fa fa-arrow-right">&nbsp;</span> 待开放
						</a>
					</li>
				</ul>
			</li>
			<li class="parent ">
				<a data-toggle="collapse" href="#article">
					<em class="fa fa-book">&nbsp;</em> Ariticle <span data-toggle="collapse" href="#sub-item-1" class="icon pull-right"><em class="fa fa-plus"></em></span>
				</a>
				<ul class="children collapse" id="article">
					<li>
						<router-link to="/articleManage">
							<span class="fa fa-arrow-right">&nbsp;</span> 文章管理
						</router-link>
					</li>
					<li>
						<a class="" href="#">
							<span class="fa fa-arrow-right">&nbsp;</span> 回收站
						</a>
					</li>
					<li>
						<a class="" href="#">
							<span class="fa fa-arrow-right">&nbsp;</span> 待开放
						</a>
					</li>
				</ul>
			</li>

			<li class="parent ">
				<a data-toggle="collapse" href="#user">
					<em class="fa  fa-users">&nbsp;</em> Users <span data-toggle="collapse" href="#sub-item-1" class="icon pull-right"><em class="fa fa-plus"></em></span>
				</a>
				<ul class="children collapse" id="user">
					<li>
						<a class="" href="#">
							<span class="fa fa-arrow-right">&nbsp;</span> 用户管理
						</a>
					</li>
					<li>
						<a class="" href="#">
							<span class="fa fa-arrow-right">&nbsp;</span> 待开放
						</a>
					</li>
				</ul>
			</li>
			<!--
			<li class="active">
				<a href="#"><em class="fa fa-dashboard">&nbsp;</em> Dashboard</a>
			</li>
			<li>
				<a href="#"><em class="fa fa-calendar">&nbsp;</em> Widgets</a>
			</li>
			<li>
				<a href="#"><em class="fa fa-bar-chart">&nbsp;</em> Charts</a>
			</li>
			<li>
				<a href="elements.html"><em class="fa fa-toggle-off">&nbsp;</em> UI Elements</a>
			</li>
			<li>
				<a href="panels.html"><em class="fa fa-clone">&nbsp;</em> Alerts &amp; Panels</a>
			</li>
			-->
			<li><a href="javascript:void(0);" @click="logout"><em class="fa fa-power-off">&nbsp;</em> Logout</a></li>
		</ul>
	</div>
</template>

<script>
  import store from '@/store/store'
  import type from '@/store/type'

	export default {
		name:"slider",
		data(){
			return {
			  username:'',
      }
		},
    mounted(){
		  this.getUserName();
    },
    methods:{
      getUserName(){
        this.username = store.state.username
      },
      logout(){
        this.$store.commit(type.LOGOUT);
        this.$router.push({path:'/'})
      }
    }
	}
</script>
