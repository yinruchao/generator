<template>
    <div>
        <router-link to="/resume" target="_blank">
            <el-button type="primary" plain>提交信息</el-button>
        </router-link>   
    </div>
</template>

<script>
export default {
  name: 'FormResume',
    data() {
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
    div 
        text-align center
</style>