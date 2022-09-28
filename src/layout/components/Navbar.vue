<template>
  <div class="navbar">
    <!-- <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" /> -->
    <img src="~@/assets/common/logoone.png" alt="" class="log">
    <div class="right-menu">
      <img src="~@/assets/common/user.png" class="user-avatar">
      <p class="username">{{ userInfoMsg.loginName }}</p>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper" @click.native="logout">
          <span>退出</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item divided>
            <span style="display:block;" @click="loginOut">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
// import Hamburger from '@/components/Hamburger'

export default {
  components: {
    // Breadcrumb,
    // Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'userInfoMsg'
    ])
  },
  created() {
    this.$store.dispatch('user/userInfo')
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    loginOut() {
      this.$store.dispatch('user/loginOut')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1999;
    background: url('../../assets/common/backgroundone.png');
    background-size: cover;
    .log{
      width: 88px;
       margin-top: 10px;
        margin-left: 15px;
    }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    // &:hover {
    //   // background: rgba(0, 0, 0, .025)
    // }
  }

  .breadcrumb-container {
    // float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    color: #fff;
    display: flex;
    align-items: center;
    &:focus {
      outline: none;
    }
  .username{
    margin: 5px 30px 0 15px;
  }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #fff;
      vertical-align: text-bottom;

      // &.hover-effect {
      //   cursor: pointer;
      //   transition: background .3s;

      //   &:hover {
      //     // background: rgba(0, 0, 0, .025)
      //   }
      // }
    }

    .avatar-container {
      margin-right: 30px;
      font-size: 16px;
      color: #fff;

      .avatar-wrapper {
        display: flex;
        margin-top: 5px;
        position: relative;
        margin-right: 10px;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          // padding: 20px;
          span{
            margin: 0px 50px 0 25px;
          }
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -14px;
          top: 15px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
