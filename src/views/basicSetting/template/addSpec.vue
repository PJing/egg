<template>
    <div class="app-container">
        <el-row>
            <el-col :span="10">
                <div>当前设置品种：<el-tag type="danger">红鸡蛋</el-tag></div>
            </el-col>
            <el-col :span="10" :offset="4">
                <el-button type="primary">新增</el-button>
                <el-button type="success">编辑</el-button>
                <el-button type="danger">删除</el-button>
            </el-col>
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
                    type="selection"
                    width="55">
                </el-table-column>
                <el-table-column
                    label="判定区间">
                <template slot-scope="scope">
                    <el-input type="text" class="inline" size="mini"></el-input>&nbsp;~&nbsp;<el-input type="text" class="inline" size="mini"></el-input>
                </template>
                </el-table-column>
                <el-table-column
                    label="标记方式">
                <template slot-scope="scope">
                    <el-select v-model="value" placeholder="请选择" class="inline" size="mini">
                        <el-option
                        v-for="item in [1,2,3,40]"
                        :key="item"
                        :label="item"
                        :value="item">
                        </el-option>
                    </el-select>
                    <el-select v-model="value" placeholder="请选择" class="inline" size="mini">
                        <el-option
                        v-for="item in [1,2,3,40]"
                        :key="item"
                        :label="item"
                        :value="item">
                        </el-option>
                    </el-select>
                    <el-select v-model="value3" placeholder="请选择" class="inline" size="mini">
                        <el-option
                        v-for="item in ['。','。']"
                        :key="item"
                        :label="item"
                        :value="item">
                        </el-option>
                    </el-select>
                </template>
                </el-table-column>
                <el-table-column
                    label="计重方式">
                <template slot-scope="scope">{{ scope.row.type }}</template>
                </el-table-column>
                <el-table-column
                    label="是否预警">
                <template slot-scope="scope">{{ scope.row.state }}</template>
                </el-table-column>
            </el-table> 
        </div>
    </div>
</template>
<script>
export default {
    name: 'AddSpec',
    data() {
        return {
            list: [
                {
                    id: 1,
                    around: '41-43',
                    tag: '8°',
                    type: '包',
                    num: 123,
                    state: '是'
                }
            ],
            value: 1,
            value3: '。'
        }
    }
}
</script>
<style scoped>
.inline{
    width: 60px;
}
</style>
