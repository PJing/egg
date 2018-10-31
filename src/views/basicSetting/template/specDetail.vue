<template>
    <div class="app-container">
        <el-row>
            <el-col :span="10">
                <div>当前设置品种：<el-tag type="danger">红鸡蛋</el-tag></div>
            </el-col>
            <el-col :span="10" :offset="4">
                <el-input
                    style="width:200px"
                    placeholder="请输入内容"
                    suffix-icon="el-icon-search"
                    v-model="searchTxt">
                </el-input>
                <el-button type="default">搜索</el-button>
                <el-button type="primary" @click="goAddSpec">新增方案</el-button>
                <el-button type="danger">删除方案</el-button>
            </el-col>
        </el-row>
        <div class="source">
            <el-row>
                <el-col :span="10" :offset="1" v-for="(item, index) in [1,2,3,4]" :key="index" style="margin-bottom:24px">
                    <el-card class="box_card" body-style="padding:0">
                        <div slot="header" class="head clear">
                            <div class="pull-right">
                                <el-button type="success" size="mini">编辑</el-button>
                                <el-button type="danger" size="mini">删除</el-button>
                            </div>
                            <span class="name">方案名称：方案1</span>
                        </div>
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
                                label="区间">
                            <template slot-scope="scope">{{ scope.row.around }}</template>
                                </el-table-column>
                            <el-table-column
                                label="标记">
                            <template slot-scope="scope">{{ scope.row.tag }}</template>
                            </el-table-column>
                            <el-table-column
                                label="方式">
                            <template slot-scope="scope">{{ scope.row.type }}</template>
                            </el-table-column>
                            <el-table-column
                                label="数值">
                            <template slot-scope="scope">{{ scope.row.num }}</template>
                            </el-table-column>
                            <el-table-column
                                label="是否预警">
                            <template slot-scope="scope">{{ scope.row.state }}</template>
                            </el-table-column>
                        </el-table> 
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SpecDetail',
    data() {
        return {
            searchTxt: '',
            list: [
                {
                    id: 1,
                    around: '41-43',
                    tag: '8°',
                    type: '包',
                    num: 123,
                    state: '是'
                }
            ]
        }
    },
    methods: {
        goAddSpec() {
            this.$router.push({
                path: 'addSpec'
            })
        }
    }

}
</script>
<style scoped>
.box_card{
    background-color: #E0E3F6;
}
.head{
    margin: -8px;
}
.name{
    line-height: 28px;
}
</style>
