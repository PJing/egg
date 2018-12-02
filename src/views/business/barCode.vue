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
    </div>
</template>
<script>
export default {
    name: 'barCode',
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
        }
    }
}
</script>
<style scoped>

</style>

