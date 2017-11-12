<template>
  <div style="overflow: hidden;background:#ffffff">
    <home-menu></home-menu>

    <div class="index-content m1">
      <div class="section">
        <ul class="artical-cate">
          <li v-for="item in tags" :class="{on:item.pk_node_id == tag_index}">
              <a href="javascript:void(0);"  @click="getData(item.pk_node_id)"><span>{{item.nodeName}}</span></a>
          </li>
        </ul>

        <div class="cate-bar"><span id="cateBar"></span></div>

        <ul class="artical-list">

          <li v-for="item in data">
            <h2>
              <router-link :to="'page/'+item.pk_article_id">{{item.title}}</router-link>
            </h2>
            <!--<p>-->
              <!--<span class="glyphicon glyphicon-star">{{item.page_view}}</span>-->
              <!--<span class="glyphicon glyphicon-calendar">{{item.published_time | timeFormat}}</span>-->
            <!--</p>-->
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
  export default {
    name: 'home',
    data() {
      return {
        tags: [],
        tag_index: 0,
        data: [],
      }
    },
    mounted() {
      this.getTags();
    },
    methods: {
      getTags(){
        axios.get("api/blog/getHomeNode").then(res=>{
          this.tags = res.data;
          this.tag_index = res.data[0].pk_node_id;
          this.getData(this.tag_index);
        },err=>{
          console.log(err);
        })
      },
      getData(index) {
        this.tag_index = index;
        axios.get("api/blog/getArticles", {
          params: {
            category: this.tag_index
          }
        }).then(res => {
          this.data = res.data;
        }, err => {
          console.log(err);
        })
      }
    },
    components: {
      homeMenu,
      navLeft,
      footerNav
    }
  }
</script>
<style scoped>

  @import "../assets/style/home.css";
</style>
