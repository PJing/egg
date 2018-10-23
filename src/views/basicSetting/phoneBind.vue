<template>
    <div class="app-container">
      <el-row>
        <el-input
        style="width:200px"
        placeholder="请输入内容"
        suffix-icon="el-icon-search"
        v-model="searchTxt">
      </el-input>
      <el-select v-model="value" placeholder="请选择">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary">搜索</el-button>
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
        label="序号">
      <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column
        label="姓名">
      <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column
        label="手机号">
      <template slot-scope="scope">{{ scope.row.phone }}</template>
        </el-table-column>
      <el-table-column
        label="角色">
      <template slot-scope="scope">{{ scope.row.userType }}</template>
      </el-table-column>
      <el-table-column
        label="来源">
      <template slot-scope="scope">{{ scope.row.from }}</template>
      </el-table-column>
      <el-table-column
        label="状态">
      <template slot-scope="scope">{{ scope.row.state }}</template>
      </el-table-column>
      <el-table-column
        width="260"
        label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="success">审核通过</el-button>
          <el-button size="mini" type="danger">不通过</el-button>
          <!-- <el-button size="mini" type="info">离职</el-button> -->
          <el-button size="mini" type="primary">离职</el-button>
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
    name: 'PhoneBind',
    data() {
        return {
            searchTxt: '',
            options: [
                {
                    value: 1,
                    label: '在职'
                },
                {
                    value: 2,
                    label: '未审核'
                },
                {
                    value: 3,
                    label: '不通过'
                },
                {
                    value: 4,
                    label: '离职'
                }
            ],
            value: 1,
            list: [
                {
                    id: 123,
                    name: '张三',
                    from: 'ios',
                    userType: '员工',
                    state: '通过',
                    phone: '1897114460'
                }
            ],
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

