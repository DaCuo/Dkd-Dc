<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="rules" class="login-form" auto-complete="on" label-position="left">
      <div class="loginBox">
        <div class="title">
          <img src="@/assets/common/logo.png" alt="">
        </div>
        <div class="inputText">

          <!-- 用户名 -->
          <el-form-item prop="username">
            <!-- <span class="svg-container">
              <svg-icon icon-class="user" />
            </span> -->
            <span class="el-icon-mobile-phone svg-container" />
            <el-input v-model.trim="loginForm.username" type="text" class="ipt" />
          </el-form-item>

          <!-- 密码 -->
          <el-form-item prop="password">
            <!-- <span class="svg-container">
              <svg-icon icon-class="password" />
            </span> -->
            <span class="el-icon-lock svg-container" />
            <el-input ref="ipt" v-model.trim="loginForm.password" :type="passwordType" class="ipt" />
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </el-form-item>

          <!-- 验证码 -->
          <el-row>
            <el-col :span="17">
              <el-form-item class="border" prop="code">
                <!-- <span class="svg-container">
            <svg-icon icon-class="user" />
            </span> -->
                <span class="el-icon-warning-outline svg-container" />
                <el-input v-model.trim="loginForm.code" type="text" class="ipt" placeholder="请输入验证码" />
              </el-form-item>
            </el-col>
            <el-col :span="7"><img ref="img" style="height:49px;width:130px" :src="codeImgURL" @click="getCode"></el-col>
          </el-row>
          <el-button class="loginBtn" :loading="loading" size="medium" @click="loginBtn">登录</el-button>
        </div>

      </div>
    </el-form>
  </div>
</template>

<script>
import { getCodeAPI, loginActionAPI } from '@/api'
export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      passwordType: 'password',
      codeToken: '',
      codeImgURL: '',
      loginForm: {
        username: 'admin',
        password: 'admin',
        code: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入账号'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          }
        ],
        code: [{
          required: true,
          // message: '请输入验证码'
          validator: this.VcCode,
          trigger: 'blur'
        }]
      }
    }
  },
  created() {
    this.getCode()
  },
  // mounted() { this.$refs.img.click() },
  methods: {
    //  验证码校验
    VcCode(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else (callback())
    },
    // 密码
    showPwd() {
      this.passwordType === 'password' ? this.passwordType = 'text' : this.passwordType = 'password'
      this.$nextTick(() => {
        this.$refs.ipt.focus()
      })
    },
    //  图片验证码请求
    async getCode() {
      this.codeToken = Math.random().toString()
      const { data } = await getCodeAPI(this.codeToken)
      this.codeImgURL = window.URL.createObjectURL(data)
    },
    // 登录请求
    async  loginBtn() {
      try {
        await this.$refs.loginForm.validate()
        this.loading = true
        const { data } = await loginActionAPI(this.loginForm.username, this.loginForm.password, this.loginForm.code, this.codeToken)
        // console.log(data)
        if (data.msg !== '登录成功') return this.$message.error(data.msg)
        this.$message({
          message: data.msg,
          type: 'success'
        })
        this.$store.commit('user/SET_TOKEN', data.token)
        this.$router.push({
          name: 'Dashboard'
        })
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }

}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#fff;
$light_gray:#fff;
$cursor: #889aa4;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  background: url('~@/assets/common/background.png') no-repeat center 0px ;
  background-position: center 0px ;
  background-size: cover;
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid #E2E2E2;
    border-radius: 5px;
    margin-bottom: 25px;
  }
}
</style>

<style lang="scss" scoped>
$bg:#fff;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
   position: absolute;
    width: 520px;
    max-width: 100%;
    /* padding: 160px 0px 0; */
    margin: 0 auto;
    /* overflow: hidden; */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 35px;
    display: inline-block;
    font-size: 20px;
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .loginBox{
    position: relative;
    width: 520px;
    height: 388px;
    background: #fff;
    border-radius: 10px;
    .inputText{
      padding: 76px 35px 0;
    }
    .title{
      position: absolute;
      margin-left: 50%;
      transform: translate(-50%,-50%);
      width: 96px;
      img{
        width: 100%;
      }
    }
   ::v-deep .ipt input{
    margin-bottom: 55px;
      color: #999;
    }
     ::v-deep .border {
      border-radius: 5px 0px  0px 5px  ;
     }
     .loginBtn{
    width: 100%;
    height: 52px;
    background: linear-gradient(262deg,#2e50e1,#6878f0);
    opacity: .91;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 7px 22px #cfcfcf;
     }
  }
}
</style>
