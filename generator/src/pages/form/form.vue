<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="个人信息" name="first"><form-info></form-info></el-tab-pane>
        <el-tab-pane label="我的技能" name="second"><form-skill></form-skill></el-tab-pane>
        <el-tab-pane label="个人荣誉" name="third"><form-honour></form-honour></el-tab-pane>
        <el-tab-pane label="自我评价" name="fourth"><form-self></form-self></el-tab-pane>
        <el-tab-pane label="我的作品" name="fifth">定时任务补偿</el-tab-pane>
        <el-tab-pane label="联系方式" name="sixth"><form-contact></form-contact></el-tab-pane>
        <el-tab-pane label="简历生成" name="seventh"><form-resume></form-resume></el-tab-pane>
    </el-tabs>
</template>

<script>
import FormInfo from './components/Info'
import FormSkill from './components/Skill'
import FormHonour from './components/Honour'
import FormSelf from './components/Self'
import FormContact from './components/Contact'
import FormResume from './components/Resume'
export default {
  name: 'Form',
    components: {
        FormInfo,
        FormSkill,
        FormHonour,
        FormSelf,
        FormContact,
        FormResume
    },
    data() {
        return {
            activeName: 'first'
        }
    }
}
</script>

<style lang="stylus" scoped>
    .el-tabs
        padding 10px
        background rgb(240,239,238)
        height 100vh
</style>