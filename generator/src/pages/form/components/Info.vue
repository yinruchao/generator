<template>
   <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
            <el-input v-model="form.name" clearable size="small"  placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
            <el-date-picker
                v-model="form.data"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="求职意向">
            <el-input v-model="form.job" clearable size="small"  placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="教育经历">
            <el-input v-model="form.edu" clearable size="small" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="学历专业">
            <el-input v-model="form.major" clearable size="small" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
            <el-input v-model="form.ipone" clearable size="small"  placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="联系邮箱">
            <el-input v-model="form.mail" clearable size="small"  placeholder="请输入内容"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'FormInfo',
    data() {
        return {
            form: {
                name: '',
                data: '',
                job: '',
                edu: '',
                major: '',
                ipone: '',
                mail: ''
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .el-form
        padding 20px
@media all and (min-width: 480px)
    .el-input 
        width 300px
@media all and (max-width: 480px)
    .el-form
        .el-input
            width 100%
</style>