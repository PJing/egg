<template>
    <div class="app-container">
        <el-form :inline="true" :model="srceen" class="demo-form-inline">
            <el-form-item label="实重自定义：">
                <el-input v-model="srceen.start" style="width:55px"></el-input> ~
                <el-input v-model="srceen.end" style="width:55px"></el-input>
            </el-form-item>
            <el-form-item label="标记方式：">
                <el-select v-model="srceen.region" placeholder="活动区域">
                <el-option label="10" value="shanghai"></el-option>
                <el-option label="20" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="方案选择：">
                <el-select v-model="srceen.area" placeholder="活动区域">
                <el-option label="方案1" value="shanghai"></el-option>
                <el-option label="方案2" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
        </el-form>
        <div class="source">
            <el-row>
                <el-col :span="6" v-for="(item,index) in [1,2,3,4,5,6,7,8,9,10]" :key="index">
                    <div class="item" @click="toDetail">
                        <div class="inner">
                            <div class="left">
                                <div class="item-cell">
                                    <label>标记：</label>
                                    <span>7</span>
                                </div>
                                <div class="item-cell">
                                    <label>库存：</label>
                                    <span>600箱</span>
                                </div>
                            </div>
                            <div class="right">
                                <div class="item-cell">
                                    <label>区间：</label>
                                    <span>100-200</span>
                                </div>
                                <div class="item-cell">
                                    <label>方式：</label>
                                    <span>包</span>
                                </div>
                                <div class="btn">查看详情</div>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ClassifyList",
        data() {
            return {
                srceen: {
                    start: 1,
                    end: 2,
                }
            }
        },
        methods: {
            toDetail() {
                this.$router.push({
                    path: 'classifyDetail'
                })
            }
        }
    }
</script>
<style scoped>
.item{
    padding: 0 40px 40px 0;
}
.inner{
    background-color: #F9FDFF;
    box-shadow: 1px 2px 6px #ccc;
    border-radius: 4px;
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 20px;
}
.inner:hover{
    background-color: #1B85F3;
    color: #fff;
    transition: all .7s ease;
}
.inner:hover span,.inner:hover div{
    color: #fff;
}
.inner:hover .left:after{
    background-color: #fff;
}
.left{
    padding: 0 20px;
    position: relative;
}
.left::after{
    content: "";
    display: block;
    width: 1px;
    height: 100%;
    background-color: #1B85F3;
    position: absolute;
    right: 0;
    top: 0;
}
.right{
    padding: 0 20px;
    position: relative;
}
.item-cell{
    font-size: 16px;
    line-height: 30px;
    min-width: 120px;
    padding-bottom: 10px;
}
.item-cell label{
    font-weight: 400;
}
.item-cell span{
    color: #409EFE;
    font-size: 20px;
}
.btn{
    color: #409EFE;
    text-decoration: underline;
    position: absolute;
    right: 0;
    bottom: -10px;
    font-style: italic;
}
</style>
