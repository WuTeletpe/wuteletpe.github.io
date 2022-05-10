Element-ui（el-table、el-pagination）实现表格分页

HTML代码：（重点关注el-table中:data数据的绑定）

el-pagination中：

layout代表组件布局，子组件名用逗号分隔
属性： total代表总条目数
事件： current-change用于监听页数改变，而内容也发生改变

```vue
<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="120">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="department"
        label="部门"
        width="150">
      </el-table-column>
      <el-table-column
        prop="floor"
        label="楼层"
        width="120">
      </el-table-column>
      <el-table-column
        prop="area"
        label="区域"
        width="120">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">修改
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center;margin-top: 30px;">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="current_change">
      </el-pagination>
    </div>
  </div>
</template>
<script>
//js代码：（addUser函数中请求的是用express搭建的服务器，tableData存放返回的json数据）
export default {
    name: "dataList",
    data() {
      return {
        tableData: [],
        multipleSelection: [],
        total: 0,
        pagesize:10,
        currentPage:1
      }
    },
    methods: {
      addUser() {
        this.$http({
          method: 'GET',
          url: 'http://127.0.0.1:8080/api/users',
        }).then(res => {
          console.log(res);
          if (!res.data.errno) {
            this.tableData = res.data.data.users;
            this.total= res.data.totalnum;
          }
        })
          .catch(function (error) {
            console.log(error);
          });
      },

      current_change:function(currentPage){
        this.currentPage = currentPage;
      },
　　　　mounted: function () {
 　　　　this.addUser();
　　　　}
}
</script>
```
