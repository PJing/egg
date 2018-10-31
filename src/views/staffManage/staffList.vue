<template>
    <div class="app-container">
        <el-row>
             <el-select v-model="value" placeholder="选择状态">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </el-row>
        <div class="source">
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
                label="入职时间">
            <template slot-scope="scope">{{ scope.row.time }}</template>
            </el-table-column>
            <el-table-column
                label="状态">
            <template slot-scope="scope">{{ scope.row.type }}</template>
            </el-table-column>
            <el-table-column
                label="积分">
            <template slot-scope="scope">
                <el-button type="success" size="mini">审核通过</el-button>
                <el-button disabled type="primary" size="mini">离职</el-button>
            </template>
            </el-table-column>
        </el-table> 
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
                    type: '已入职/申请中',
                    num: 123,
                    state: '1',
                    num2: '22',
                    time: '2018-8-8 15:30:30'
                }
            ],
            options: [
                {
                    value: '1',
                    label: '已入职'
                },
                {
                    value: '2',
                    label: '已申请'
                },
                {
                    value: '3',
                    label: '已离职'
                }
            ],
            value: '1'
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
