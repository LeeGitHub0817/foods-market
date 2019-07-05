<template>
  <div>
    <div class="l-welcome">
      <div class="welcome-title">Welcome</div>
    </div>
    <form class="l-form" action="">
      <div class="l-common l-account">
        <div class="common account-con">
          <input v-model="formData.telNumber" type="number" placeholder="请输入注册的手机号码">
        </div>
      </div>
      <div class="l-common l-upwd">
        <div class="common upwd-con">
          <input v-model="formData.upwd" type="password" placeholder="请输入密码">
        </div>
      </div>
      <div class="l-common l-loginbtn">
        <div class="common loginbtn-con">
          <input @click="submit" style="-webkit-appearance: none;" type="button" value="登录">
        </div>
      </div>
      <div class="l-common l-link">
        <div class="link-con">
          <span class="l-reg"><router-link to="/register">注册账户</router-link></span>
          <span class="l-line"></span>
          <span class="l-ret"><router-link to="/retrieve">找回密码</router-link></span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import api from "../../api/api";
import { Toast } from 'vant';

export default {
  data: function(){
    return {
      //提交的表单数据
      formData: {
        telNumber: '', //电话号码
        upwd: '', //密码
      }
    }
  },
  methods: {
    //提交信息
    submit(){
      if(/^1[356789]\d{9}$/.test(this.formData.telNumber) == false){
        Toast('请输入正确的手机号码！');
        return;
      }
      api.userLogin(this.formData).then((res) => {
        if(res.data.data.status == true){
          this.$router.push("/userCenter");
        }else{
          Toast(res.data.data.msg);
        }
      }).catch((err) => {
        Toast('登录失败，请稍后再试！');
      })
    }
  }
}
</script>

<style lang="scss" src="@/assets/sass/user.scss"></style>
