<template>
    <div class="app-container">
        <el-row>
            <el-form :inline="true" :model="formInline">
                <el-form-item label="请输入姓名/代号：">
                    <el-input v-model="formInline.user"></el-input>
                </el-form-item>
                 <el-form-item label="请输入编号：">
                    <el-input v-model="formInline.user"></el-input>
                </el-form-item>
                <el-form-item label="供应商选择：">
                    <el-select v-model="formInline.region" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="合作商选择：">
                    <el-select v-model="formInline.region" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="选择开始时间：">
                    <el-date-picker
                        v-model="formInline.value1"
                        type="date"
                        style="width:185px"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="选择结束时间：">
                    <el-date-picker
                        v-model="formInline.value1"
                        type="date"
                        style="width:185px"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" @click="onSubmit">挂账</el-button>
                    <el-button type="danger" @click="onSubmit">销账</el-button>
                </el-form-item>
            </el-form>
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
                    label="序号">
                <template slot-scope="scope">{{ scope.row.id }}</template>
                </el-table-column>
                <el-table-column
                    label="编号">
                <template slot-scope="scope">{{ scope.row.around }}</template>
                    </el-table-column>
                <el-table-column
                    label="姓名">
                <template slot-scope="scope">{{ scope.row.tag }}</template>
                </el-table-column>
                <el-table-column
                    label="代号">
                <template slot-scope="scope">{{ scope.row.type }}</template>
                </el-table-column>
                <el-table-column
                    label="日期">
                <template slot-scope="scope">{{ scope.row.num }}</template>
                </el-table-column>
                <el-table-column
                    label="进/出货">
                <template slot-scope="scope">{{ scope.row.num2 }}</template>
                </el-table-column>
                <el-table-column
                    label="品种">
                <template slot-scope="scope">{{ scope.row.num3 }}</template>
                </el-table-column>
                 <el-table-column
                    label="数量">
                <template slot-scope="scope">{{ scope.row.num3 }}</template>
                </el-table-column>
                <el-table-column
                    label="合计">
                <template slot-scope="scope">{{ scope.row.num3 }}</template>
                </el-table-column>
                <el-table-column
                    label="备注">
                <template slot-scope="scope">{{ scope.row.num3 }}</template>
                </el-table-column>
                <el-table-column
                    label="状态">
                <template slot-scope="scope">{{ scope.row.num3 }}</template>
                </el-table-column>
                <el-table-column
                    width="100px"
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="success" size="mini" @click="dialogVisible = true">查看</el-button>
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
        <!-- 弹框 -->
        <el-dialog
            title="合作商账单"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <el-form :inline="true" :model="formInline">
                <el-button type="default" class="pull-right">编辑</el-button>
                <el-form-item label="账单编号：">
                    <span class="span">123321</span>
                </el-form-item>
                 <el-form-item label="合作商：">
                    <span class="span">商铺</span>
                </el-form-item>
                <el-form-item label="姓名：">
                    <span class="span">张三</span>
                </el-form-item>
                <el-form-item label="合计：">
                    <span class="span">123321</span>
                </el-form-item>
                <el-form-item label="状态：">
                    <span class="span">未结清</span>
                </el-form-item>
            </el-form>
            <el-table
                border
                ref="multipleTable"
                :data="list"
                tooltip-effect="dark"
                style="width: 100%">
                <el-table-column
                    label="品种">
                <template slot-scope="scope">{{ scope.row.id }}</template>
                </el-table-column>
                <el-table-column
                    label="标记">
                <template slot-scope="scope">{{ scope.row.around }}</template>
                </el-table-column>
                <el-table-column
                    label="实重">
                <template slot-scope="scope">{{ scope.row.tag }}</template>
                </el-table-column>
                <el-table-column
                    label="单价">
                <template slot-scope="scope">{{ scope.row.tag }}</template>
                </el-table-column>
                <el-table-column
                    label="数量">
                <template slot-scope="scope">{{ scope.row.tag }}</template>
                </el-table-column>
                <el-table-column
                    label="小计">
                <template slot-scope="scope">{{ scope.row.tag }}</template>
                </el-table-column>
            </el-table> 
            <span slot="footer" class="dialog-footer">
                <el-button type="success" @click="dialogVisible = false">保 存</el-button>
                <el-button type="danger" @click="dialogVisible = false">销 账</el-button>
                <el-button type="success" @click="dialogVisible = false">记 账</el-button>
                <el-button type="danger" @click="dialogVisible2 = true">报 损</el-button>
                <el-button type="danger" @click="dialogVisible = false">取消</el-button>
            </span>
        </el-dialog>
        <!-- 报损弹框 -->
        <el-dialog
            title="员工选择"
            :visible.sync="dialogVisible2"
            width="30%"
            :before-close="handleClose">
            <el-button type="primary">张三</el-button>
            <el-button type="primary">张三</el-button>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'FinanceList',
    data() {
        return {
            searchTxt: '',
            formInline: {},
            list: [{
                num3:1
            }],
            dialogVisible: false,
            dialogVisible2: false,
            // 分页相关
            pageNumber: 1,
            pageSize: 10,
            total: 100,
        }
    },
    methods: {
        onSubmit() {

        },
        handleSelectionChange() {

        },
        handleClose() {

        }
    }
}
</script>
<style scoped>
.span{
    padding-right: 20px;
}
</style>
