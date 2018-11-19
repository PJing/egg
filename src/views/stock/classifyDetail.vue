<template>
    <div class="app-container">
         <el-form :inline="true" :model="srceen" class="demo-form-inline">
            <el-form-item>
                <el-button type="primary">返回</el-button>
            </el-form-item>
            <el-form-item label="实重自定义：">
                <span>123</span>
            </el-form-item>
            <el-form-item label="标记方式：">
               <span>123</span>
            </el-form-item>
            <el-form-item label="总计：">
               <span>123箱</span>
               <span>---------(42-43): 4箱，(42-43): 4箱，(42-43): 4箱</span>
            </el-form-item>
        </el-form>
        <div class="source">
            <el-table
                border
                ref="multipleTable"
                :data="list"
                tooltip-effect="dark"
                style="width: 100%">
                <el-table-column
                    label="标记">
                <template slot-scope="scope">{{ scope.row.name }}</template>
                </el-table-column>
                <el-table-column
                    label="实重">
                <template slot-scope="scope">{{ scope.row.creatTime }}</template>
                    </el-table-column>
                <el-table-column
                    label="来源">
                <template slot-scope="scope">{{ scope.row.creatName }}</template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ClassifyDetail',
    data() {
        return {
            srceen: {
                start: 1,
                end: 2,
            },
            list: [{
                name: '白鸡蛋',
                creatTime: '2015-05-05 22:12:12',
                creatName: '张三'
            }]
        }
    }
}
</script>
<style scoped>

</style>
