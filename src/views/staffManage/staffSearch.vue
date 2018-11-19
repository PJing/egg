<template>
    <div class="app-container">
        <el-table
                border
                ref="multipleTable"
                :data="list"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
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
                    label="出货数量/箱">
                <template slot-scope="scope">{{ scope.row.type }}</template>
                </el-table-column>
                <el-table-column
                    label="卸货/车">
                <template slot-scope="scope">{{ scope.row.num }}</template>
                </el-table-column>
                <el-table-column
                    label="完成订单数量">
                <template slot-scope="scope">{{ scope.row.num2 }}</template>
                </el-table-column>
                <el-table-column
                    label="积分">
                <template slot-scope="scope">{{ scope.row.num3 }}</template>
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
    name: 'StaffSearch',
    data() {
        return {
            list: [
                {
                    id: 1,
                    around: '张三',
                    tag: '18971114460',
                    type: '123',
                    num: 123,
                    state: '1',
                    num2: '22',
                    num3: '123'
                }
            ],
            // 分页相关
            pageNumber: 1,
            pageSize: 10,
            total: 100,
        }
    },
    methods: {
        handleSelectionChange() {
            console.log(123)
        }
    }
}
</script>
<style scoped>

</style>
