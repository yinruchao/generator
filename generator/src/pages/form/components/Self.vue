<template>
   <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="编程方面">
            <el-input
                type="textarea"
                :autosize="{ minRows: 8}"
                placeholder="请输入内容"
                v-model="form.demo">
            </el-input>
        </el-form-item>
        <el-form-item label="工作方面">
            <el-input
                type="textarea"
                :autosize="{ minRows: 8}"
                placeholder="请输入内容"
                v-model="form.work">
            </el-input>
        </el-form-item>
   </el-form>    
</template>

<script>
export default {
  name: 'FormSelf',
    data() {
        return {
            form: {
                demo: '',
                work: ''
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .el-form
        padding 10px
</style>