<template>
    <div class="app-container">
        <el-row>
            <el-col :span="24">
                <h3 class="text_center">请选择品种</h3>
            </el-col>
        </el-row>
        <div class="spec_container">
            <div class="btn" @click="toDetail">红鸡蛋</div>
            <div class="btn">白鸡蛋</div>
            <div class="btn">土鸡蛋</div>
            <div class="btn">黄鸡蛋</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SpecManage',
    data() {
        return {

        }
    },
    methods: {
        toDetail() {
            this.$router.push({
                path:'specDetail'
            })
        }
    }
}
</script>
<style scoped>
.text_center{
    text-align: center;
    font-size: 38px;
}
.spec_container{
    width: 840px;
    margin: 40px auto;
}
.btn{
    float: left;
    width: 380px;
    margin: 0 40px 40px 0;
    height: 100px;
    font-size: 30px;
    line-height: 100px;
    text-align: center;
    background-color: #409EFF;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
}
.btn:hover{
    background-color: #66b1ff;
}
</style>
