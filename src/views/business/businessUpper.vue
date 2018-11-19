<template>
    <div class="app-container">
        <el-row>
            <el-input
            style="width:200px"
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            v-model="searchTxt">
            </el-input>
            <el-select v-model="value" placeholder="状态查询">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-button>搜索</el-button>
            <div class="pull-right">
            <el-button type="primary" @click="dialogVisible = true">新增</el-button>
            <el-button type="danger">删除</el-button>
            </div>
        </el-row>
        <!-- 表格 -->
        <div class="source">
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
                <template slot-scope="scope">{{ scope.row.around }}</template>
                    </el-table-column>
                <el-table-column
                    label="手机号">
                <template slot-scope="scope">{{ scope.row.tag }}</template>
                </el-table-column>
                <el-table-column
                    label="代号">
                <template slot-scope="scope">{{ scope.row.type }}</template>
                </el-table-column>
                <el-table-column
                    label="识别码">
                <template slot-scope="scope">{{ scope.row.num }}</template>
                </el-table-column>
                <el-table-column
                    label="状态">
                <template slot-scope="scope">{{ scope.row.num2 }}</template>
                </el-table-column>
                <el-table-column
                    label="备注">
                <template slot-scope="scope">{{ scope.row.num3 }}</template>
                </el-table-column>
                <el-table-column
                    width="250px"
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="success" size="mini">历史账单</el-button>
                    <el-button type="primary" size="mini">编辑</el-button>
                    <el-button type="default" size="mini" @click="open">删除</el-button>
                </template>
                </el-table-column>
            </el-table> 
        </div>
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
        <!-- 新增弹框 -->
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%">
            <!-- 表单 -->
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="名称：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="代号：">
                    <el-input v-model="form.code"></el-input>
                </el-form-item>
                <el-form-item label="联系方式：">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="识别码：">
                    <el-input v-model="form.idCode"></el-input>
                </el-form-item>
                <el-form-item label="状态：">
                    <el-radio-group v-model="form.resource">
                    <el-radio label="合作中"></el-radio>
                    <el-radio label="合作中断"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="备注：">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'BusinessUpper',
    data() {
        return {
            searchTxt:'',
            options: [
                {
                    value:1,
                    label: '全部'
                },
                {
                    value:2,
                    label: '合作中'
                },
                {
                    value:3,
                    label: '合作中断'
                }
            ],
            value: 1,
            list: [
                {
                    id: 1,
                    around: '张三',
                    tag: '18971114460',
                    type: '123',
                    num: 123,
                    state: '是',
                    num2: '123',
                    num3: '456'
                }
            ],
            dialogVisible: false,
            form: {

            },
            // 分页相关
            pageNumber: 1,
            pageSize: 10,
            total: 100,
        }
    },
    methods: {
        open() {
            this.$confirm('是否删除当前合作商?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            // 执行相应的方法
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });          
            });
        },
        handleSelectionChange() {
            console.log(123)
        },
    }
}
</script>
<style scoped>

</style>

