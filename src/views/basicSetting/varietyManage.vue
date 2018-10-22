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
      }]
    }
  },
  methods: {
    handleSelectionChange() {}
  }
}
</script>
<style scoped>
</style>
