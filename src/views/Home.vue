<template>
	<div style="overflow: hidden">
		<home-menu></home-menu>

		<div class="index-content m1" >
			<div class="section">
				<ul class="artical-cate">
					<li v-for="(item,index) in tags" :class="{on:index == tag_index}"><a href="javascrit:viod(0);" @click="getArticles(index)"><span>{{item}}</span></a></li>
				</ul>

				<div class="cate-bar"><span id="cateBar"></span></div>

				<ul class="artical-list" >

					<li v-for="item in data">
						<h2>
							<router-link :to="'page/'+item.pk_article_id">{{item.title}}</router-link>
						</h2>
						<!-- <p>
							<span class="glyphicon glyphicon-star">{{item.page_view}}</span>
							<span class="glyphicon glyphicon-calendar">{{item.published_time | timeFormat}}</span>
						</p> -->
						<div class="title-desc">{{item.content | article }}</div>
					</li>

				</ul>
				<footer-nav></footer-nav>
			</div>
			<nav-left></nav-left>

		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import homeMenu from '@/components/homeMenu'
	import navLeft from '@/components/navLeft'
	import footerNav from '@/components/footer'

	import filter from '@/util/filter'
	import util from '@/util/util'
	
	export default {
		name: 'home',
		data () {
			return {
				tags:['NodeJS','Java','PHP'],
				tag_index:0,
				data:[],
			}
		},
		mounted () {
			this.getData()
		},
		methods:{
			getArticles(index){
				this.tag_index=index;
				this.getData();
			},
			getData(){
				axios.get("http://127.0.0.1:8080/blog/getArticles",{
					params: {
						category:this.tag_index
					}
				}).then(res=>{
					this.data=res.data;
				},err=>{
					console.log(err);
				})
			}
		},
		components:{
			homeMenu,
			navLeft,
			footerNav
		}
	}
</script>

