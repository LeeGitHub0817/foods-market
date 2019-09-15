<template>
  <div class="all-wrap">
    <div class="common-bac"></div>
    <div class="head-wrap">
      <head-com :titleHead="'个人资料'"></head-com>
    </div>

    <div class="content-detail">
      <div class="common-item flex-between-center">
        <span class="item-title">头像</span>
        <img class="item-avatar" src="../../assets/img/user/default_avatar.jpg">
      </div>
      <div class="common-item flex-between-center">
        <span class="item-title">昵称</span>
        <input class="item-input" type="text" placeholder="请输入你的昵称">
      </div>
      <div class="common-item flex-between-center">
        <span class="item-title">性别</span>
        <input class="item-input" type="text" placeholder="请输入你的性别">
      </div>
    </div>

    <div class="save-btn flex-all-center">保存</div>

    <div class="logout-btn-wrap flex-all-center">
      <div @click="handleLogout" class="logout-btn flex-all-center">退出登录</div>
    </div>
  </div>
  
</template>

<script>
import api from '../../api/api.js';
import { Toast } from 'vant';

export default {
  name: 'userinfo',
  data() {
    return {

    }
  },
  methods: {
    handleLogout () {
      api.logout().then((res) => {
        console.log(res);
        if(res.data.data.status === true) {
          Toast(res.data.data.msg);
          setTimeout(() => {
            this.$router.replace('/login');
          }, 2000)
        }
      }).catch((err) => {
        console.log(err);
      })
    }
  },
}
</script>


<style lang="scss">
  .all-wrap{
    background-color: #F1F4F7;
  }
  .head-wrap{
    height: 100px;
  }
  .content-detail {
    background-color: #fff;
    padding: 0 32px;
    box-sizing: border-box;
    .common-item {
      padding: 22px 0;
      .item-title {
        font-size: 30px;
      }
      .item-avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%
      }
      .item-input {
        text-align: right;
        font-size: 28px;
      }
      .item-input::placeholder {
        text-align: right;
        font-size: 28px;
      }
    }
  }

  .save-btn {
    margin: 32px 32px 0;
    height: 90px;
    background-color: #46c182;
    border-radius: 8px;
    color: #fff;
    font-size: 28px;
  }

  .logout-btn-wrap {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 32px;
    padding: 0 32px;
    box-sizing: border-box;
    .logout-btn {
      width: 100%;
      height: 90px;
      background-color: #FF6353;
      border-radius: 8px;
      color: #fff;
      font-size: 28px;
    }
  }
</style>
