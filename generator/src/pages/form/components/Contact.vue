<template>
   <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="微信图片">
            <el-upload
                class="avatar-uploader"
                action="https://www.mocky.io/v2/5185415ba171ea3a00704eed/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item label="qq图片">
            <el-input v-model="form.job" clearable size="small"  placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="邮箱网址">
            <el-input v-model="form.job" clearable size="small"  placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="github网址">
            <el-input v-model="form.job" clearable size="small"  placeholder="请输入内容"></el-input>
        </el-form-item>
   </el-form>    
</template>

<script>
export default {
  name: 'FormContact',
    data() {
        return {
            form: {
                imageUrl: ''
            }
        }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.form.imageUrl = URL.createObjectURL(file.raw);
        console.log(this.form.imageUrl)
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
}
</script>

<style lang="stylus" scoped>
    .avatar-uploader .el-upload 
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
  
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
    .el-form
        padding 10px
</style>