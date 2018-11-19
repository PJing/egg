<template>
    <div class="app-container">
        <!-- 卸货贩子 -->
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="宜昌贩子" name="first"></el-tab-pane>
            <el-tab-pane label="宜昌贩子" name="second"></el-tab-pane>
            <el-tab-pane label="宜昌贩子" name="third"></el-tab-pane>
            <el-tab-pane label="宜昌贩子" name="fourth"></el-tab-pane>
            <el-tab-pane label="添加任务+" name="five"></el-tab-pane>
        </el-tabs>
        <el-row type="flex" justify="end">
             <el-col :span="18">
                <el-form :inline="true" :model="formInline">
                    <el-form-item label="供应商：">
                        <span>123</span>
                    </el-form-item>
                    <el-form-item label="方案选择：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">自适应方案</el-button>
                        <el-button type="primary" @click="onSubmit">整理归类</el-button>
                    </el-form-item>
                </el-form>
             </el-col>
            <el-col :span="6">
                <el-button type="success" @click="dialogVisible2 = true">开始卸货</el-button>
                <el-button type="primary" @click="onSubmit">暂停卸货</el-button>
                <el-button type="danger" @click="dialogVisible = true">卸货结束</el-button>
            </el-col>
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
                    label="名称">
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
                    label="实重">
                <template slot-scope="scope">{{ scope.row.num }}</template>
                </el-table-column>
            </el-table> 
        </div>
        <!-- 开始卸货弹框 -->
        <el-dialog
            title="设备选择"
            :visible.sync="dialogVisible2"
            width="30%"
            :before-close="handleClose">
            <el-button type="primary" @click="dialogVisible2 = false">张三</el-button>
            <el-button type="primary" @click="dialogVisible2 = false">张三</el-button>
            
        </el-dialog>
        <el-dialog
            title="供应商：荆州当地贩子"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
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
                    label="品种">
                <template slot-scope="scope">{{ scope.row.id }}</template>
                </el-table-column>
                <el-table-column
                    label="规格">
                <template slot-scope="scope">{{ scope.row.around }}</template>
                    </el-table-column>
                <el-table-column
                    label="单价">
                <template slot-scope="scope">{{ scope.row.tag }}</template>
                </el-table-column>
                <el-table-column
                    label="数量">
                <template slot-scope="scope">{{ scope.row.type }}</template>
                </el-table-column>
                <el-table-column
                    label="小计">
                <template slot-scope="scope">{{ scope.row.num }}</template>
                </el-table-column>
            </el-table> 
            <span slot="footer" class="dialog-footer">
                <span class="pdr">合计：￥123456.00</span>
                <el-button type="primary" @click="dialogVisible = false">打印单据</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'DisburdenStart',
    data() {
        return {
            formInline: {

            },
            list: [],
            activeName: 'first',
            dialogVisible: false,
            dialogVisible2: false
        }
    },
     methods: {
        onSubmit() {

        },
        handleSelectionChange() {

        },
        handleClose() {
            this.dialogVisible = false
        },
        handleClick() {

        }
    }
}
</script>
<style scoped>
.pdr{
    padding-right: 10px;
}
</style>
