<template>
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
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li>
                <a href="javascript:void(0);" aria-label="Previous" @click="getNodeList(prePage)">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li v-for="index in pageTotal" :class="{active: index == pageIndex}">
                <a href="javascript:void(0);" @click="getNodeList(index)">{{index}}</a>
              </li>
              <li>
                <a href="javascript:void(0);" aria-label="Next" @click="getNodeList(nextPage)">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
    export default {
        name: 'page',
        data() {
            return {}
        },
        mounted() {
        },
        methods: {},
    }
</script>
