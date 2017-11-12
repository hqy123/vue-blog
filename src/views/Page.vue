<template>
	<div>
		<home-menu></home-menu>
		<div id="content">
			<div class="entry">
				<h1 class="entry-title">{{data.title}}</h1>
				<p class="entry-date">{{data.published_time | timeFormat}}</p>
				<div v-html="data.content">
				</div>
			</div>

			<div class="sidenav">
				<h2>Blog</h2>
				<ul class="artical-list">
					<li><a href="/over-1000-movies">看过一千部以上的电影后</a></li>
				</ul>

				<h2>Dump</h2>
				<ul class="artical-list">
					<li><a href="/wish-list-201607-anime">七月新番评测清单</a></li>
				</ul>

				<h2>Project</h2>
				<ul class="artical-list">
					<li><a href="/chinese-color-how-to-use">“中国传统色”应用使用帮助</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import homeMenu from '@/components/homeMenu'
	import axios from 'axios'

	import filter from '@/util/filter'

	export default {
		name:"page-view",
		data () {
			return {
				article_id:this.$route.params.article_id,
				data:{}
			}
		},
		mounted(){
			this.articleInit(this.article_id);
		},
		methods:{
			articleInit (id) {
				axios.get('api/blog/getOneArticle',{params:{id:this.article_id}}).then(res=>{
					this.data = res.data;
					console.log(res.data)
				},err=>{
					console.log(err)
				})
			}
		},
		components:{
			homeMenu
		}
	}
</script>
