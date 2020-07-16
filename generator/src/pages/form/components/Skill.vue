<template>
   <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="HTML">
            <el-input
                type="textarea"
                :autosize="{ minRows: 4}"
                placeholder="请输入内容"
                v-model="form.html">
            </el-input>
        </el-form-item>
        <el-form-item label="CSS">
            <el-input
                type="textarea"
                :autosize="{ minRows: 4}"
                placeholder="请输入内容"
                v-model="form.css">
            </el-input>
        </el-form-item>
        <el-form-item label="JavaScript">
            <el-input
                type="textarea"
                :autosize="{ minRows: 4}"
                placeholder="请输入内容"
                v-model="form.js">
            </el-input>
        </el-form-item>
        <el-form-item label="Vue">
            <el-input
                type="textarea"
                :autosize="{ minRows: 4}"
                placeholder="请输入内容"
                v-model="form.vue">
            </el-input>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
  name: 'FormSkill',
    data() {
        return {
            form: {
                html: '',
                css: '',
                js: '',
                vue: ''
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .el-form
        padding 10px
</style>