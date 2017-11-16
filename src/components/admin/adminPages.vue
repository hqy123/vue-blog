<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li>
        <a href="javascript:void(0);" aria-label="Previous" @click="getNodeList(page.prePage)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="index in page.pageTotal" :class="{active: index == page.pageIndex}">
        <a href="javascript:void(0);" @click="getNodeList(index)">{{index}}</a>
      </li>
      <li>
        <a href="javascript:void(0);" aria-label="Next" @click="getNodeList(page.nextPage)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
    export default {
        name: 'admin-page',
        data() {
          return {};
        },
        props:['page'],
    }
</script>
