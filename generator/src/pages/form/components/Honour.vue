<template>
   <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="时间">
            <el-select v-model="form.time1" placeholder="请选择">
                <el-option
                    v-for="item in form.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="内容">
            <el-input
                type="textarea"
                :autosize="{ minRows: 4}"
                placeholder="请输入内容"
                v-model="form.content1">
            </el-input>
        </el-form-item>
        <el-form-item label="时间">
            <el-select v-model="form.time2" placeholder="请选择">
                <el-option
                    v-for="item in form.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="内容">
            <el-input
                type="textarea"
                :autosize="{ minRows: 4}"
                placeholder="请输入内容"
                v-model="form.content2">
            </el-input>
        </el-form-item>
        <el-form-item label="时间">
            <el-select v-model="form.time3" placeholder="请选择">
                <el-option
                    v-for="item in form.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="内容">
            <el-input
                type="textarea"
                :autosize="{ minRows: 4}"
                placeholder="请输入内容"
                v-model="form.content3">
            </el-input>
        </el-form-item>
   </el-form>    
</template>

<script>
export default {
  name: 'FormHonour',
    data() {
        return {
            form: {
                options: [{
                    value: '选项1',
                    label: '2019年-2020年'
                    }, {
                    value: '选项2',
                    label: '2018年-2019年'
                    }, {
                    value: '选项3',
                    label: '2017年-2018年'
                    },{
                    value: '选项4',
                    label: '2016年-2017年'
                    }, {
                    value: '选项5',
                    label: '2015年-2016年'
                    }, {
                    value: '选项6',
                    label: '2014年-2015年'
                }],
                time1: '',
                time2: '',
                time3: '',
                content1: '',
                content2: '',
                content3: ''
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .el-form
        padding 10px
</style>