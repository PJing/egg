<template>
  <div class="app-container">
    <el-row>
        <el-input
        style="width:200px"
        placeholder="请输入内容"
        suffix-icon="el-icon-search"
        v-model="searchTxt">
        </el-input>
        <el-button>搜索</el-button>
        <el-button type="primary">新增</el-button>
        <el-button type="danger">删除</el-button>
    </el-row>
      <!-- 表格 -->
    <div class="app-container"></div>
    <el-table
      border
      ref="multipleTable"
      :data="list"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="名称">
      <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column
        label="创建时间">
      <template slot-scope="scope">{{ scope.row.creatTime }}</template>
        </el-table-column>
      <el-table-column
        label="创建人">
      <template slot-scope="scope">{{ scope.row.creatName }}</template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="source">
      <el-pagination
        background
        @size-change="sizeChange"
        @current-change="getList"
        :current-page.sync="pageNumber"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VarietyManage',
  data() {
    return {
      searchTxt: '',
      list: [{
        name: '白鸡蛋',
        creatTime: '2015-05-05 22:12:12',
        creatName: '张三'
      }],
      // 分页相关
      pageNumber: 1,
      pageSize: 10,
      total: 100
    }
  },
  methods: {
    // 选中改变时
    handleSelectionChange() {
      console.log(123)
    },
    sizeChange(val) {
      this.pageSize = val
      console.log('每页条数', this.pageSize)
    },
    getList() {
      console.log(this.pageNumber, this.pageSize, this.total)
    }
  }
}
</script>
<style scoped>
</style>
