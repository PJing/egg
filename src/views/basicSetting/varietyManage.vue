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
        <div class="pull-right">
          <el-button type="primary" @click="dialogVisible = true">新增</el-button>
          <el-button type="danger" @click="delAllTip">删除</el-button>
        </div>
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
          <el-button size="mini" type="danger" @click="showTip(scope.id)">删除</el-button>
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
    <!-- 弹窗 -->
    <el-dialog
      title="品种名称"
      :visible.sync="dialogVisible"
      width="30%">
      <span><el-input type="text" placeholder="请输入品种名称" v-model="strEggtypeName"></el-input></span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">取 消</el-button>
        <el-button type="danger" @click="varietyAdd">保存</el-button>
      </span>
    </el-dialog>
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
        creatName: '张三',
				id:123321
      },
			{
				name: '白鸡蛋',
				creatTime: '2015-05-05 22:12:12',
				creatName: '张三',
				id:123321
			}],
      // 分页相关
      pageNumber: 1,
      pageSize: 10,
      total: 100,
			dialogVisible: false,
			strEggtypeName: '',
			delArrId:[]
    }
  },
	created() {
		this.listeggtype()
	},
  methods: {
    // 选中改变时
    handleSelectionChange(ev) {

			this.delArrId = ev
      console.log(ev)
    },
    sizeChange(val) {
      this.pageSize = val
      console.log('每页条数', this.pageSize)
    },
    getList() {
      console.log(this.pageNumber, this.pageSize, this.total)
    },
		// 新增鸡蛋类型
		varietyAdd() {
			let str = {
				"strEggtypeName": this.strEggtypeName,
				"strEggtypeCode": ""
			}
			this.$post('varietyAdd',str).then(res => {
				console.log(res)
			})
		},
		// 查询鸡蛋列表
		listeggtype() {
			let str = {
					// "strEggtypeName": "",
					"currentPage": "1",
					"pageSize": "10"
			}
			this.$post('listeggtype',str).then(res => {
				
			})
		},
		showTip(id) {
			this.$confirm('确定删除当前品种吗？', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.varietyDelete(id)
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				});          
			});
		},
		// 删除单个品种
		varietyDelete(id) {
			let str = {
					"id": id
			}
			this.$post('varietyDelete',str).then(res => {
					if (res.data.status === 0) {
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
					}else {
						this.$message({
							type: 'error',
							message: '操作失败'
						});
					}
			})
		},
		delAllTip() {
			if(this.delArrId.length === 0) {
				this.$message({
					type: 'info',
					message: '请选择要删除的品种'
				}); 
				return
			}
			this.$confirm('确定删除选中的品种吗？', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.batchdelete()
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				});          
			});
		},
		// 批量删除
		batchdelete() {
			let arr = []
			this.delArrId.forEach(item => {
				arr.push(item.id)
			})
			let str = {
					"id": arr
			}
			this.$post('batchdelete',str).then(res => {
					if (res.data.status === 0) {
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
					}else {
						this.$message({
							type: 'error',
							message: '操作失败'
						});
					}
			})
		}
  }
}
</script>
<style scoped>
</style>
